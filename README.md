# MongoDB Aggregation Pipeline Bug
This repository demonstrates a common error in MongoDB aggregation pipelines resulting in unexpected query results.
The issue stems from an incorrect use of the `$group` and `$match` stages leading to inaccurate grouping and counting.
The `bug.js` file contains the erroneous code, and `bugSolution.js` provides the corrected implementation.