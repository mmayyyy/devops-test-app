const lynx = require("lynx");

// Read environment variables or set default values
const statsd_host = process.env.STATSD_HOST || "localhost";
const statsd_port = parseInt(process.env.STATSD_PORT, 10) || 8125;
const metric_interval = parseInt(process.env.METRIC_INTERVAL, 10) || 3000;
const metric_name = process.env.METRIC_NAME || "test.core.delay";
const environment = process.env.ENVIRONMENT || "n/a";

console.log(`Configurations:`);
console.log(` - Environment: ${environment}`);
console.log(` - StatsD Host: ${statsd_host}`);
console.log(` - StatsD Port: ${statsd_port}`);
console.log(` - Metric Interval: ${metric_interval}ms`);
console.log(` - Metric Name: ${metric_name}`);

// Instantiate a metrics client
const metrics = new lynx(statsd_host, statsd_port);

// Sleep for a given number of milliseconds
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Main function to send metrics
async function main() {
  const metricValue = Math.random() * 1000;
  metrics.timing(metric_name, metricValue);
  return sleep(metric_interval);
}

// Infinite loop to keep sending metrics
(async () => {
  console.log(`🚀🚀🚀 Metrics sending started (${environment})...`);
  while (true) {
    await main();
  }
})().then(console.log, console.error);