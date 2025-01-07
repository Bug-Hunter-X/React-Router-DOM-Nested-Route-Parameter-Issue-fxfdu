# React Router DOM Nested Route Parameter Issue

This repository demonstrates an uncommon bug in React Router DOM v6 related to nested routes and route parameters.  When nesting routes with parameters, unexpected behavior can occur where the parameters are not correctly parsed or accessed.

## Bug Description

The issue is described in `bug.js`.  Nested routes with parameters may not render correctly or access the expected parameters.

## Solution

A potential solution is provided in `bugSolution.js`. This solution focuses on correctly structuring the routes and accessing parameters using the `useParams` hook.