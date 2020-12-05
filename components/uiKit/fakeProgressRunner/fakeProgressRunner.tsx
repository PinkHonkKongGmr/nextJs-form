import { useState, useEffect } from "react";
import { Progress } from "antd";

export default function FakeProgressRunner() {
  const [fakeProgress, setFakeProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setFakeProgress((prev) => prev + 10);
    });
    return () => {
      clearInterval(interval);
    };
  }, []);

  return <Progress percent={fakeProgress} />;
}
