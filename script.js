// Toggle Sidebar
document.getElementById("sidebarCollapse")?.addEventListener("click", () => {
  document.getElementById("sidebar").classList.toggle("active");
});


// Initialize Charts if elements exist
document.addEventListener('DOMContentLoaded', function() {
    const ctx = document.getElementById('leadsChart').getContext('2d');
    
    // Generate sample data
    const labels = Array.from({length: 12}, (_, i) => i + 1);
    const data = {
        labels: labels,
        datasets: [{
            label: 'Leads',
            data: [150, 200, 180, 250, 220, 300, 280, 350, 330, 400, 380, 450],
            fill: true,
            borderColor: '#4361ee',
            backgroundColor: 'rgba(67, 97, 238, 0.1)',
            tension: 0.4,
            pointRadius: 0,
            borderWidth: 2
        }]
    };

    const config = {
        type: 'line',
        data: data,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                x: {
                    grid: {
                        display: false
                    },
                    ticks: {
                        maxTicksLimit: 12
                    }
                },
                y: {
                    beginAtZero: true,
                    grid: {
                        borderDash: [2, 2]
                    },
                    ticks: {
                        maxTicksLimit: 5
                    }
                }
            }
        }
    };

    new Chart(ctx, config);
});

document.addEventListener("DOMContentLoaded", function () {
  // Initialize Traffic Chart
  const ctx = document.getElementById("trafficChart").getContext("2d");
  new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: ["Direct Visits", "Search Engines", "Referrals", "Paid Ads"],
      datasets: [
        {
          data: [15, 45, 15, 25],
          backgroundColor: ["#C7CEFF", "#5A6ACF", "#5A6ACF", "#8593ED"],
          borderWidth: 0,
          cutout: "75%",
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
      },
    },
  });

  // Sample domains data
  const domains = [
    { name: "techstartups.org", status: "Available" },
    { name: "digitalmarket.com", status: "Available" },
    { name: "cryptoverse.net", status: "Available" },
    { name: "aiplatform.io", status: "Available" },
    { name: "smartchain.tech", status: "Available" },
    { name: "webstudio.dev", status: "Available" },
  ];

  // Render domain list
  const domainList = document.getElementById("domainList");
  domains.forEach((domain) => {
    const domainItem = document.createElement("div");
    domainItem.className = "domain-item";
    domainItem.innerHTML = `
            <div class="domain-info">
                <span class="domain-name">${domain.name}</span>
                <span class="domain-status">${domain.status}</span>
            </div>
            <button class="btn btn-primary btn-sm explore-btn">Explore</button>
        `;
    domainList.appendChild(domainItem);
  });
});
// js for the payout setting page

const paymentMethods = document.querySelectorAll('input[name="paymentMethod"]');
const paymentForms = {
  bank: document.getElementById('bankForm'),
  paypal: document.getElementById('paypalForm'),
  payoneer: document.getElementById('payoneerForm'),
  bitpay: document.getElementById('bitpayForm')
};

// Function to show the selected form and hide others
function showPaymentForm(selectedMethod) {
  Object.keys(paymentForms).forEach(method => {
    if (method === selectedMethod) {
      paymentForms[method].classList.remove('d-none');
    } else {
      paymentForms[method].classList.add('d-none');
    }
  });
}

paymentMethods.forEach(radio => {
  radio.addEventListener('change', (event) => {
    showPaymentForm(event.target.value);
  });
});

const selectedMethod = document.querySelector('input[name="paymentMethod"]:checked');
if (selectedMethod) {
  showPaymentForm(selectedMethod.value);
}



// tabs 

document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll(".content-section");

  tabs.forEach((tab) => {
    tab.addEventListener("click", function (e) {
      e.preventDefault();

      // Remove 'active' class from all tabs
      tabs.forEach((t) => t.classList.remove("active"));

      // Hide all content sections
      sections.forEach((section) => (section.style.display = "none"));

      // Add 'active' class to the clicked tab
      this.classList.add("active");

      // Show the corresponding section
      const targetSection = document.getElementById(this.dataset.section + "-section");
      if (targetSection) targetSection.style.display = "block";
    });
  });
});




document.getElementById('byHandLink').addEventListener('click', function (event) {
  event.preventDefault();
  document.getElementById('byHandDiv').style.display = 'block';
  document.getElementById('excelDiv').style.display = 'none';
});

document.getElementById('importExcelLink').addEventListener('click', function (event) {
  event.preventDefault();
  document.getElementById('byHandDiv').style.display = 'none';
  document.getElementById('excelDiv').style.display = 'block';
});



