document.addEventListener('DOMContentLoaded', function() {
    var evaluateBtn = document.getElementById('evaluateBtn');
    var resultDiv = document.getElementById('result');
  
    evaluateBtn.addEventListener('click', function() {
      var designScore = parseInt(document.getElementById('design').value);
      var usabilityScore = parseInt(document.getElementById('usability').value);
      var pricingScore = parseInt(document.getElementById('pricing').value);
  
      if (isNaN(designScore) || isNaN(usabilityScore) || isNaN(pricingScore)) {
        resultDiv.innerHTML = 'Please enter valid scores for all parameters.';
        return;
      }
  
      var totalScore = designScore + usabilityScore + pricingScore;
      var averageScore = totalScore / 3;
  
      resultDiv.innerHTML = 'Total Score: ' + totalScore + '<br>' +
                            'Average Score: ' + averageScore.toFixed(2);
    });
  });
  