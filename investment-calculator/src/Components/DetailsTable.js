import './DetailsTable.css';

function DetailsTable(props){

  const yearlyData = [];

  let currentSavings = +props.data.currentInvestment; // feel free to change the shape of this input object!
  const yearlyContribution = +props.data.yearlyContribution; // as mentioned: feel free to change the shape...
  const expectedReturn = +props.data.rate / 100;
  const duration = +props.data.duration;
  let totalInterest = 0;



  for (let i = 0; i < duration; i++) {
    let yearlyInterest = currentSavings * expectedReturn;
    totalInterest += yearlyInterest;
    currentSavings = currentSavings + yearlyInterest + yearlyContribution;
    yearlyData.push({
      // feel free to change the shape of the data pushed to the array!
      year: i + 1,
      yearlyInterest: yearlyInterest,
      savingsEndOfYear: currentSavings,
      yearlyContribution: yearlyContribution,
      totalInterest : totalInterest
    });
  }


  console.log(yearlyData);
  return(
    <table className='result'>
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings(₹)</th>
          <th>Interest(Year)</th>
          <th>Total Interest(₹)</th>
          <th>Invested Capital(₹)</th>
        </tr>
      </thead>
      <tbody>
        {yearlyData.map((yeardata) => <tr>
          <td>{yeardata.year}</td>
          <td>{(yeardata.savingsEndOfYear+yeardata.yearlyInterest+yeardata.yearlyContribution).toFixed()}</td>
          <td>{yeardata.yearlyInterest.toFixed()}</td>
          <td>{yeardata.totalInterest.toFixed()}</td>
          <td>{yeardata.savingsEndOfYear.toFixed()}</td>
        </tr>)}
      </tbody>
    </table>
  );
}

export default DetailsTable;