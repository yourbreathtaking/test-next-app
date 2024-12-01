export default async function Page() {
    const data = await new Promise((resolve) =>
      setTimeout(() => resolve('Hello World!'), 2000) // Simulate loading
    );
  
    return (<div>who ceares</div>);
  }
  