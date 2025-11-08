// src/data/challenges.js
export const challenges = [
  {
    id: 1,
    title: "Two Sum Problem",
    difficulty: "Easy",
    tags: ["Arrays", "Hash Table"],
    points: 50,
    isFree: true, // Can be viewed without login
    requiresLogin: false, // Can be attempted without login
    status: "not_started",
    description: `Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.`,
    examples: [
      {
        input: "nums = [2,7,11,15], target = 9",
        output: "[0,1]",
        explanation: "Because nums[0] + nums[1] == 9, we return [0, 1]."
      },
      {
        input: "nums = [3,2,4], target = 6",
        output: "[1,2]",
        explanation: "Because nums[1] + nums[2] == 6, we return [1, 2]."
      }
    ],
    constraints: [
      "2 <= nums.length <= 10^4",
      "-10^9 <= nums[i] <= 10^9",
      "-10^9 <= target <= 10^9",
      "Only one valid answer exists."
    ],
    starterCode: {
      javascript: `function twoSum(nums, target) {
    // Write your code here

}`,
      python: `def twoSum(nums, target):
    # Write your code here
    pass`,
      java: `class Solution {
    public int[] twoSum(int[] nums, int target) {
        // Write your code here

    }
}`
    },
    testCases: [
      {
        input: { nums: [2, 7, 11, 15], target: 9 },
        expectedOutput: [0, 1]
      },
      {
        input: { nums: [3, 2, 4], target: 6 },
        expectedOutput: [1, 2]
      },
      {
        input: { nums: [3, 3], target: 6 },
        expectedOutput: [0, 1]
      }
    ]
  },
  {
    id: 2,
    title: "Reverse String",
    difficulty: "Easy",
    tags: ["String", "Two Pointers"],
    points: 50,
    isFree: true,
    requiresLogin: true, // Free to view, but needs login to submit
    status: "not_started",
    description: `Write a function that reverses a string. The input string is given as an array of characters s.

You must do this by modifying the input array in-place with O(1) extra memory.`,
    examples: [
      {
        input: 's = ["h","e","l","l","o"]',
        output: '["o","l","l","e","h"]',
        explanation: ""
      },
      {
        input: 's = ["H","a","n","n","a","h"]',
        output: '["h","a","n","n","a","H"]',
        explanation: ""
      }
    ],
    constraints: [
      "1 <= s.length <= 10^5",
      "s[i] is a printable ascii character."
    ],
    starterCode: {
      javascript: `function reverseString(s) {
    // Write your code here

}`,
      python: `def reverseString(s):
    # Write your code here
    pass`,
      java: `class Solution {
    public void reverseString(char[] s) {
        // Write your code here

    }
}`
    },
    testCases: [
      {
        input: { s: ["h", "e", "l", "l", "o"] },
        expectedOutput: ["o", "l", "l", "e", "h"]
      },
      {
        input: { s: ["H", "a", "n", "n", "a", "h"] },
        expectedOutput: ["h", "a", "n", "n", "a", "H"]
      }
    ]
  },
  {
    id: 3,
    title: "Binary Tree Traversal",
    difficulty: "Medium",
    tags: ["Tree", "Depth-First Search"],
    points: 100,
    isFree: false, // Locked - requires login to view
    requiresLogin: true,
    status: "locked",
    description: `Given the root of a binary tree, return the inorder traversal of its nodes' values.

Inorder traversal visits nodes in the following order: Left subtree, Root, Right subtree.`,
    examples: [
      {
        input: "root = [1,null,2,3]",
        output: "[1,3,2]",
        explanation: "Inorder traversal: left -> root -> right"
      }
    ],
    constraints: [
      "The number of nodes in the tree is in the range [0, 100].",
      "-100 <= Node.val <= 100"
    ],
    starterCode: {
      javascript: `function inorderTraversal(root) {
    // Write your code here

}`,
      python: `def inorderTraversal(root):
    # Write your code here
    pass`,
      java: `class Solution {
    public List<Integer> inorderTraversal(TreeNode root) {
        // Write your code here

    }
}`
    },
    testCases: [
      {
        input: { root: [1, null, 2, 3] },
        expectedOutput: [1, 3, 2]
      }
    ]
  },
  {
    id: 4,
    title: "Valid Palindrome",
    difficulty: "Easy",
    tags: ["String", "Two Pointers"],
    points: 50,
    isFree: true,
    requiresLogin: false,
    status: "not_started",
    description: `A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward.

Given a string s, return true if it is a palindrome, or false otherwise.`,
    examples: [
      {
        input: 's = "A man, a plan, a canal: Panama"',
        output: 'true',
        explanation: '"amanaplanacanalpanama" is a palindrome.'
      },
      {
        input: 's = "race a car"',
        output: 'false',
        explanation: '"raceacar" is not a palindrome.'
      }
    ],
    constraints: [
      "1 <= s.length <= 2 * 10^5",
      "s consists only of printable ASCII characters."
    ],
    starterCode: {
      javascript: `function isPalindrome(s) {
    // Write your code here

}`,
      python: `def isPalindrome(s):
    # Write your code here
    pass`,
      java: `class Solution {
    public boolean isPalindrome(String s) {
        // Write your code here

    }
}`
    },
    testCases: [
      {
        input: { s: "A man, a plan, a canal: Panama" },
        expectedOutput: true
      },
      {
        input: { s: "race a car" },
        expectedOutput: false
      },
      {
        input: { s: " " },
        expectedOutput: true
      }
    ]
  },
  {
    id: 5,
    title: "Maximum Subarray",
    difficulty: "Medium",
    tags: ["Array", "Dynamic Programming"],
    points: 120,
    isFree: false,
    requiresLogin: true,
    status: "locked",
    description: `Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

A subarray is a contiguous part of an array.`,
    examples: [
      {
        input: "nums = [-2,1,-3,4,-1,2,1,-5,4]",
        output: "6",
        explanation: "The subarray [4,-1,2,1] has the largest sum 6."
      },
      {
        input: "nums = [1]",
        output: "1",
        explanation: "The subarray [1] has the largest sum 1."
      }
    ],
    constraints: [
      "1 <= nums.length <= 10^5",
      "-10^4 <= nums[i] <= 10^4"
    ],
    starterCode: {
      javascript: `function maxSubArray(nums) {
    // Write your code here

}`,
      python: `def maxSubArray(nums):
    # Write your code here
    pass`,
      java: `class Solution {
    public int maxSubArray(int[] nums) {
        // Write your code here

    }
}`
    },
    testCases: [
      {
        input: { nums: [-2, 1, -3, 4, -1, 2, 1, -5, 4] },
        expectedOutput: 6
      },
      {
        input: { nums: [1] },
        expectedOutput: 1
      }
    ]
  },
  {
    id: 6,
    title: "Merge Sorted Arrays",
    difficulty: "Easy",
    tags: ["Array", "Two Pointers"],
    points: 50,
    isFree: true,
    requiresLogin: true,
    status: "not_started",
    description: `You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

Merge nums1 and nums2 into a single array sorted in non-decreasing order.`,
    examples: [
      {
        input: "nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3",
        output: "[1,2,2,3,5,6]",
        explanation: "The arrays we are merging are [1,2,3] and [2,5,6]."
      }
    ],
    constraints: [
      "nums1.length == m + n",
      "nums2.length == n",
      "0 <= m, n <= 200"
    ],
    starterCode: {
      javascript: `function merge(nums1, m, nums2, n) {
    // Write your code here

}`,
      python: `def merge(nums1, m, nums2, n):
    # Write your code here
    pass`,
      java: `class Solution {
    public void merge(int[] nums1, int m, int[] nums2, int n) {
        // Write your code here

    }
}`
    },
    testCases: [
      {
        input: { nums1: [1, 2, 3, 0, 0, 0], m: 3, nums2: [2, 5, 6], n: 3 },
        expectedOutput: [1, 2, 2, 3, 5, 6]
      }
    ]
  }
];
