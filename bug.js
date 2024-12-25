```javascript
// Incorrect aggregation pipeline causing unexpected results
aggregate([
  {
    $match: {
      "fieldName": "someValue"
    }
  },
  {
    $group: {
      _id: "$fieldName",
      count: { $sum: 1 }
    }
  }
])
```