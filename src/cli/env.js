const parseEnv = () => {
  // Write your code here
  // implement function that parses environment variables
  // with prefix RSS_ and prints them to the console
  // in the format RSS_name1=value1; RSS_name2=value2
  const envs = process.env;
  const result = Object.entries(envs)
    .filter(([key]) => {
      return key.startsWith("RSS_");
    })
    .reduce((accum, [key, value]) => {
      accum.push(`${key}=${value}`);
      return accum;
    }, [])
    .join("; ");
  console.log(result);
};

parseEnv();
