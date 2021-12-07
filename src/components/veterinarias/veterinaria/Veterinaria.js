import "antd/dist/antd.css";
import { Row, Col, Typography, Divider, Collapse, Input, Button } from "antd";
import { SettingOutlined } from "@ant-design/icons";

export const Veterinaria = () => {
  const { Title } = Typography;
  const { Panel } = Collapse;
  const { Search } = Input;
  const callback = (key) => {
    console.log(key);
  };
  const text = `
        A dog is a type of domesticated animal.
        Known for its loyalty and faithfulness,
        it can be found as a welcome guest in many households across the world.
      `;
  const genExtra = () => (
    <SettingOutlined
      onClick={(event) => {
        // If you don't want click extra trigger collapse, you can prevent this:
        event.stopPropagation();
      }}
    />
  );
  const onSearch = (value) => console.log(value);
  return (
    <>
      <Row justify="center">
        <Title level={2}>Veterinaria</Title>
      </Row>
      <Row
        gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
        align="middle"
        justify="center"
        style={{ marginTop: "3em" }}
      >
        <Col className="gutter-row" span={20}>
          <div>
            <Title level={2}>Ultimas Atenciones</Title>
            <Search
              placeholder="Buscar atenciones "
              onSearch={onSearch}
              enterButton
            />
            <Divider></Divider>
            <Collapse onChange={callback} expandIconPosition="right">
              <Panel header="Atencion 1" key="1" extra={genExtra()}>
                <div>{text}</div>
              </Panel>
              <Panel header="Atencion 2" key="2" extra={genExtra()}>
                <div>{text}</div>
              </Panel>
              <Panel header="Atencion 3" key="3" extra={genExtra()}>
                <div>{text}</div>
              </Panel>
            </Collapse>
            <br />
          </div>
        </Col>
      </Row>
      <Row justify="center">
        <Col className="gutter-row" span={20}>
          <Title level={2}>Acciones</Title>
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={6}>
              <Button type="primary" block>
                Primary
              </Button>
            </Col>
            <Col className="gutter-row" span={6}>
              <Button type="primary" block>
                Primary
              </Button>
            </Col>
            <Col className="gutter-row" span={6}>
              <Button type="primary" block>
                Primary
              </Button>
            </Col>
            <Col className="gutter-row" span={6}>
              <Button type="primary" block>
                Primary
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};
