import "./style.css";
import React, { useState, useEffect } from "react";
import moment from "moment";
import { Button } from "antd";
import { Col, Divider, Row } from "antd";
import { FormOutlined } from "@ant-design/icons";
import { Table, Typography, Space } from "antd";

function Home() {
  const [currentTime, setCurrentTime] = useState(
    moment().format("DD MMM YYYY HH:mm:ss")
  );
  const DemoBox = (props) => (
    <div className="boxes">
      <p className={`height-${props.value}`}>{props.children}</p>
    </div>
  );
  const handleSignIn = () => {
    // Implement your sign-in logic here
    console.log("Sign in clicked");
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(moment().format("DD MMM YYYY HH:mm:ss"));
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const ReviewBox = ({ value, children }) => (
    <div>
      <FormOutlined style={{ marginRight: 8 }} />
      {value} {children}
    </div>
  );
  const { Text } = Typography;
  const columns = [
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
    },
  ];
  const data = [
    {
      key: "1",
      description: "Basic Salary",
      amount: "$5,000.00",
    },
    {
      key: "2",
      description: "Overtime Pay",
      amount: "$500.00",
    },
  ];
  const totalAmount = data.reduce(
    (total, item) => total + parseFloat(item.amount.replace(/[^\d.]/g, "")),
    0
  );

  const Payslip = () => {
    console.log("1234");
    return (
      <div>
        <Typography.Title level={4}>Payslip</Typography.Title>
        <Table columns={columns} dataSource={data} pagination={false} />
        <Space style={{ marginTop: "16px" }}>
          <Text strong>Total:</Text>
          <Text>${totalAmount.toFixed(2)}</Text>
        </Space>
      </div>
    );
  };

  return (
    <>
      <div className="homeContent">
        <div className="review">
          <DemoBox value={100}>
            <FormOutlined />
            Review
          </DemoBox>
        </div>
        <div className="time">
          <div className="sign-in-container">
            <DemoBox value={100}>
              <p> {currentTime}</p>
              <Button
                type="primary"
                onClick={handleSignIn}
                className="sign-in-button"
              >
                Sign In
              </Button>
            </DemoBox>
          </div>
        </div>
        <div className="holidays">
          <DemoBox value={200}>Upcoming Holidays</DemoBox>
        </div>
        <div className="quickAccess">
          <DemoBox value={100}>Quick Access</DemoBox>
        </div>
        <div className="payslip">
          <DemoBox value={270}>
            <Payslip />
          </DemoBox>
        </div>
        <div className="itDeclaration">
          <DemoBox value={100}>IT Declaration</DemoBox>
        </div>
        <div className="track">
          <DemoBox value={200}>Track</DemoBox>
        </div>
        <div className="poi">
          <DemoBox value={80}>POI</DemoBox>
        </div>
      </div>
    </>
    // <div className="homeContent">
    //   <div className="homeContent1">Review</div>
    //   <div className="homeContent2">
    //     <p> {currentTime}</p>
    //   </div>
    //   <div className="homeContent3">Review</div>
    // </div>
  );
}

export default Home;
