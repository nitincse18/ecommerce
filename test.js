const jsonArray2 = {
  "b2c": [
    {
      "Job Assist": {
        "benefits": "Career progression for Leadership roles (2 employment applications)",
        "id": 2,
        "package": 2,
        "category_id": 0
      }
    },
    {
      "Real Estate": {
        "benefits": "Cashback up to ₹10 lakhs on Premium Properties Like L&T, Godrej, Rustomjee, Lodha, The Wadhwa Group, Raheja",
        "id": 1,
        "package": 1,
        "category_id": 2
      },
    }
    ]
};

const convertedArray = jsonArray2["b2c"].map((item) => {
  const category = Object.keys(item)[0];
  return { [category]: item[category].benefits };
});

const convertedArray1 = convertedArray.map(item => {
    const category = Object.keys(item)[0];
    const benefits = item[category];
    return { label: category, benefits };
  });
  
  
  console.log(convertedArray1);

// console.log(convertedArray);