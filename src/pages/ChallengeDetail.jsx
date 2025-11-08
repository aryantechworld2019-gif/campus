// src/pages/ChallengeDetail.jsx
import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CodeEditor from "../components/CodeEditor";
import { challenges } from "../data/challenges";
import { FaLock, FaCheck, FaTimes, FaPlay, FaChevronLeft } from "react-icons/fa";
import "./ChallengeDetail.css";

export default function ChallengeDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [challenge, setChallenge] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("javascript");
  const [code, setCode] = useState("");
  const [isRunning, setIsRunning] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [testResults, setTestResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [consoleOutput, setConsoleOutput] = useState("");

  useEffect(() => {
    // Check authentication
    const token = localStorage.getItem('authToken');
    setIsAuthenticated(!!token);

    // Find challenge
    const foundChallenge = challenges.find(c => c.id === parseInt(id));

    if (!foundChallenge) {
      navigate('/coding-lab');
      return;
    }

    // Check access permissions
    if (!foundChallenge.isFree && !token) {
      alert('This challenge requires login. Please sign in to continue.');
      navigate('/login', { state: { from: `/coding-lab/challenge/${id}` } });
      return;
    }

    setChallenge(foundChallenge);
    setCode(foundChallenge.starterCode[selectedLanguage]);
  }, [id, navigate]);

  useEffect(() => {
    if (challenge) {
      setCode(challenge.starterCode[selectedLanguage]);
    }
  }, [selectedLanguage, challenge]);

  const handleLanguageChange = (lang) => {
    setSelectedLanguage(lang);
  };

  const executeCode = async (testMode = false) => {
    if (!isAuthenticated && challenge.requiresLogin) {
      alert('Please login to run code for this challenge.');
      navigate('/login');
      return;
    }

    if (testMode) {
      setIsSubmitting(true);
    } else {
      setIsRunning(true);
    }

    setShowResults(false);
    setConsoleOutput("");

    try {
      // Simple JavaScript execution in browser (for demo)
      // In production, use a backend API like Judge0 or Piston

      if (selectedLanguage === 'javascript') {
        const results = [];
        let allPassed = true;

        for (let i = 0; i < challenge.testCases.length; i++) {
          const testCase = challenge.testCases[i];

          try {
            // Create function from code
            const func = new Function('return ' + code)();

            // Execute with test input
            const result = func(...Object.values(testCase.input));

            // Compare with expected output
            const passed = JSON.stringify(result) === JSON.stringify(testCase.expectedOutput);

            results.push({
              testCase: i + 1,
              input: testCase.input,
              expected: testCase.expectedOutput,
              actual: result,
              passed: passed,
              error: null
            });

            if (!passed) allPassed = false;

          } catch (error) {
            results.push({
              testCase: i + 1,
              input: testCase.input,
              expected: testCase.expectedOutput,
              actual: null,
              passed: false,
              error: error.message
            });
            allPassed = false;
          }
        }

        setTestResults(results);
        setShowResults(true);

        if (testMode) {
          if (allPassed) {
            setConsoleOutput(`✅ All test cases passed! You earned ${challenge.points} points!`);
            // Update challenge status
            setTimeout(() => {
              alert(`Congratulations! You've solved "${challenge.title}"!\n\nPoints earned: ${challenge.points}\n\nKeep coding!`);
            }, 500);
          } else {
            setConsoleOutput(`❌ Some test cases failed. Please review your solution.`);
          }
        }

      } else {
        // For Python/Java - would need backend API
        setConsoleOutput(`⚠️ ${selectedLanguage} execution requires backend API. For demo, please use JavaScript.`);
      }

    } catch (error) {
      setConsoleOutput(`❌ Error: ${error.message}`);
    } finally {
      setIsRunning(false);
      setIsSubmitting(false);
    }
  };

  const handleRun = () => executeCode(false);
  const handleSubmit = () => executeCode(true);

  if (!challenge) {
    return (
      <div>
        <Navbar />
        <div className="container" style={{ padding: '40px 24px', textAlign: 'center' }}>
          <h2>Loading challenge...</h2>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div className="challenge-detail-page">
        <div className="challenge-header-bar">
          <div className="container">
            <Link to="/coding-lab" className="back-link">
              <FaChevronLeft /> Back to Challenges
            </Link>
            <div className="challenge-header-title">
              <h1>{challenge.title}</h1>
              <div className="challenge-header-meta">
                <span className={`difficulty-badge ${challenge.difficulty.toLowerCase()}`}>
                  {challenge.difficulty}
                </span>
                <span className="points-badge">⭐ {challenge.points} points</span>
                {!challenge.isFree && <span className="premium-badge">Premium</span>}
                {challenge.requiresLogin && <span className="login-badge">Login Required</span>}
              </div>
            </div>
          </div>
        </div>

        <div className="challenge-content">
          <div className="challenge-left">
            <div className="challenge-description">
              <h3>Description</h3>
              <p>{challenge.description}</p>

              <h3>Examples</h3>
              {challenge.examples.map((example, idx) => (
                <div key={idx} className="example-box">
                  <div><strong>Input:</strong> {example.input}</div>
                  <div><strong>Output:</strong> {example.output}</div>
                  {example.explanation && (
                    <div><strong>Explanation:</strong> {example.explanation}</div>
                  )}
                </div>
              ))}

              <h3>Constraints</h3>
              <ul className="constraints-list">
                {challenge.constraints.map((constraint, idx) => (
                  <li key={idx}>{constraint}</li>
                ))}
              </ul>

              <h3>Tags</h3>
              <div className="tags-list">
                {challenge.tags.map((tag, idx) => (
                  <span key={idx} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="challenge-right">
            <div className="editor-container">
              <div className="editor-header">
                <div className="language-selector">
                  <button
                    className={selectedLanguage === 'javascript' ? 'active' : ''}
                    onClick={() => handleLanguageChange('javascript')}
                  >
                    JavaScript
                  </button>
                  <button
                    className={selectedLanguage === 'python' ? 'active' : ''}
                    onClick={() => handleLanguageChange('python')}
                  >
                    Python
                  </button>
                  <button
                    className={selectedLanguage === 'java' ? 'active' : ''}
                    onClick={() => handleLanguageChange('java')}
                  >
                    Java
                  </button>
                </div>
                <div className="editor-actions">
                  <button
                    className="btn-run"
                    onClick={handleRun}
                    disabled={isRunning || isSubmitting}
                  >
                    {isRunning ? (
                      <>Running...</>
                    ) : (
                      <>
                        <FaPlay /> Run Code
                      </>
                    )}
                  </button>
                  <button
                    className="btn-submit"
                    onClick={handleSubmit}
                    disabled={isRunning || isSubmitting}
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit'}
                  </button>
                </div>
              </div>

              <CodeEditor
                code={code}
                onChange={setCode}
                language={selectedLanguage}
              />

              <div className="console-output">
                <h4>Output</h4>
                <div className="console-content">
                  {consoleOutput && (
                    <pre className="console-text">{consoleOutput}</pre>
                  )}

                  {showResults && testResults.length > 0 && (
                    <div className="test-results">
                      <h5>Test Results:</h5>
                      {testResults.map((result, idx) => (
                        <div key={idx} className={`test-result ${result.passed ? 'passed' : 'failed'}`}>
                          <div className="test-header">
                            {result.passed ? <FaCheck /> : <FaTimes />}
                            <span>Test Case {result.testCase}</span>
                          </div>
                          <div className="test-details">
                            <div><strong>Input:</strong> {JSON.stringify(result.input)}</div>
                            <div><strong>Expected:</strong> {JSON.stringify(result.expected)}</div>
                            <div><strong>Actual:</strong> {result.error ? `Error: ${result.error}` : JSON.stringify(result.actual)}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {!consoleOutput && !showResults && (
                    <div className="console-placeholder">
                      Click "Run Code" to see output or "Submit" to test all cases
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
