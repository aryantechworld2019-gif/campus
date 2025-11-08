// src/pages/ForgotPassword.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaEnvelope, FaArrowLeft } from "react-icons/fa";
import "./auth.css";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!email || !email.includes('@')) {
      setError("Please enter a valid email address");
      return;
    }

    setIsLoading(true);

    try {
      // Simulate API call - Replace with actual password reset endpoint
      await new Promise(resolve => setTimeout(resolve, 1500));

      console.log('Password reset email sent to:', email);
      setIsSubmitted(true);
    } catch (err) {
      setError("Failed to send reset email. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleResend = async () => {
    setIsLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      alert('Reset email sent again!');
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="auth-page">
        <div className="auth-container centered">
          <div className="auth-card">
            <div className="auth-header">
              <div className="success-icon">
                <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
                  <circle cx="32" cy="32" r="32" fill="#10b981" opacity="0.1"/>
                  <circle cx="32" cy="32" r="24" fill="#10b981" opacity="0.2"/>
                  <path d="M20 32L28 40L44 24" stroke="#10b981" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h1>Check Your Email</h1>
              <p className="auth-subtitle">
                We've sent a password reset link to<br/>
                <strong>{email}</strong>
              </p>
            </div>

            <div className="auth-instructions">
              <p>Click the link in the email to reset your password. If you don't see it, check your spam folder.</p>

              <div className="resend-section">
                <p>Didn't receive the email?</p>
                <button
                  type="button"
                  className="btn btn-ghost"
                  onClick={handleResend}
                  disabled={isLoading}
                >
                  {isLoading ? "Sending..." : "Resend Email"}
                </button>
              </div>
            </div>

            <div className="auth-footer">
              <Link to="/login" className="link-back">
                <FaArrowLeft /> Back to Sign In
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="auth-page">
      <div className="auth-container centered">
        <div className="auth-card">
          <div className="auth-header">
            <Link to="/" className="auth-logo">
              <img src="/atw_campus_logo.png" alt="ATW Campus" height="50" />
            </Link>
            <h1>Forgot Password?</h1>
            <p className="auth-subtitle">
              No worries, we'll send you reset instructions
            </p>
          </div>

          <form className="auth-form" onSubmit={handleSubmit}>
            {error && (
              <div className="auth-error">
                {error}
              </div>
            )}

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <div className="input-wrapper">
                <FaEnvelope className="input-icon" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  autoComplete="email"
                  autoFocus
                />
              </div>
            </div>

            <button type="submit" className="btn btn-primary btn-full" disabled={isLoading}>
              {isLoading ? "Sending..." : "Reset Password"}
            </button>
          </form>

          <div className="auth-footer">
            <Link to="/login" className="link-back">
              <FaArrowLeft /> Back to Sign In
            </Link>
          </div>
        </div>

        <div className="auth-features">
          <h3>Security Tips</h3>
          <ul>
            <li>✓ Never share your password</li>
            <li>✓ Use a strong, unique password</li>
            <li>✓ Enable two-factor authentication</li>
            <li>✓ Keep your email secure</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
