```javascript
// Corrected aggregation pipeline
aggregate([
  {
    $match: {
      "fieldName": { $exists: true, $ne: null }
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