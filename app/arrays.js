exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    var index = arr.indexOf(item);
    return index;
  },

  sum: function(arr) {
    var total = 0;
    arr.forEach(function(item) {
      total += item;
    });
    return total;
  },

  remove: function(arr, item) {
    var ret = [];
    arr.forEach(function(element) {
      if (element !== item) {
        ret.push(element);
      }
    });
    return ret;
  },

  removeWithoutCopy: function(arr, item) {
    var i;
    var len;

    for (i = 0, len = arr.length; i < len; i++) {
      if (arr[i] === item) {
        arr.splice(i, 1);
        i--;
        len--;
      }
    }

    return arr;
  },

  append: function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate: function(arr) {
    arr.splice(-1, 1);
    return arr;
  },

  prepend: function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail: function(arr) {
    arr.splice(0, 1);
    return arr;
  },

  concat: function(arr1, arr2) {
    var arr3 = arr1.concat(arr2);
    return arr3;
  },

  insert: function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count: function(arr, item) {
    var count = 0;
    arr.forEach(function(element) {
      if (element === item) {
        count++;
      }
    });
    return count;
  },

  duplicates: function(arr) {
    var seen = {};
    var dupes = [];

    arr.forEach(function(element) {
      seen[element] = seen[element] ? seen[element] + 1 : 1;
    });
    for (var item in seen) {
      if (seen.hasOwnProperty(item) && seen[item] > 1) {
        dupes.push(Number(item));
      }
    }

    return dupes;
  },

  square: function(arr) {
    for (var i = 0, len = arr.length; i < len; i++) {
      arr[i] *= arr[i];
    }
    return arr;
  },

  findAllOccurrences: function(arr, target) {
    var occ = [];
    arr.forEach(function(element, i) {
      if (element === target) {
        occ.push(i);
      }
    });
    return occ;
  }
};
