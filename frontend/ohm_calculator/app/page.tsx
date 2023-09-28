"use client";

import Image from "next/image";
import { Col, Row, Input, Form, Button } from "antd";
import { useEffect, useState } from "react";
import axios from "axios";

const api_url = "http://localhost:3030";

interface ColorBand {
  position?: number;
  color?: string;
  significantFigure?: number;
  multiplier?: number;
  tolerance?: number;
}

export default function Home() {
  const defaulBand: ColorBand = {};
  const [bandsColors, setBandsColors] = useState({
    1: defaulBand,
    2: defaulBand,
    3: defaulBand,
    4: defaulBand,
  });
  const [ohmValue, setOhmValue] = useState("0");

  const ChangeColorBand = (bandNumber: number, color: string) => {
    const Band: ColorBand = { position: bandNumber, color: color };
    setBandsColors((state) => {
      return { ...state, [bandNumber]: Band };
    });

    console.log(bandsColors);
    return color;
  };

  const CalcularOhm = async () => {
    const ohmValuesApi = await axios.get(api_url + "/bands", {
      params: { bandsColors },
    });
    setOhmValue(ohmValuesApi.data);
    console.log(ohmValuesApi.data);
  };

  return (
    <div className="container">
      <Row>
        <Col>
          <h1>The OhM Calculator</h1>
        </Col>
      </Row>
      <br />
      <Row className="resistance-rep">
        <Col
          style={{ backgroundColor: bandsColors[1].color }}
          className="bands first-band"
        >
          1
        </Col>
        <Col
          style={{ backgroundColor: bandsColors[2].color }}
          className="bands second-band"
        >
          2
        </Col>
        <Col
          style={{ backgroundColor: bandsColors[3].color }}
          className="bands third-band"
        >
          3
        </Col>
        <Col
          style={{ backgroundColor: bandsColors[4].color }}
          className="bands fourth-band"
        >
          4
        </Col>
      </Row>
      <br />
      <Row justify="center">
        <Col span={24}>
          <p>
            {" "}
            Calculates the Ohm value of a resistor based on the band colors
          </p>
        </Col>
        <br />
        <br />
        <Col>
          <Form layout="inline">
            <Form.Item rules={[{ required: true }]}>
              <div
                className="colorbox"
                style={{ backgroundColor: bandsColors[1].color }}
              >
                1
              </div>
              <Input
                onChange={(event) => {
                  ChangeColorBand(1, event.target.value);
                }}
                placeholder="First Band Color"
              />
            </Form.Item>
            <Form.Item rules={[{ required: true }]}>
              <div
                className="colorbox"
                style={{ backgroundColor: bandsColors[2].color }}
              >
                2
              </div>
              <Input
                onChange={(event) => {
                  ChangeColorBand(2, event.target.value);
                }}
                placeholder="Second Band Color"
              />
            </Form.Item>
            <Form.Item rules={[{ required: true }]}>
              <div
                className="colorbox"
                style={{ backgroundColor: bandsColors[3].color }}
              >
                3
              </div>
              <Input
                onChange={(event) => {
                  ChangeColorBand(3, event.target.value);
                }}
                placeholder="Third Band Color"
              />
            </Form.Item>
            <Form.Item rules={[{ required: true }]}>
              <div
                className="colorbox"
                style={{ backgroundColor: bandsColors[4].color }}
              >
                4
              </div>
              <Input
                onChange={(event) => {
                  ChangeColorBand(4, event.target.value);
                }}
                placeholder="Fourth Band Color"
              />
            </Form.Item>
          </Form>
        </Col>
      </Row>
      <br />
      <Row>
        <Col>
          <Button type="default" size="large" onClick={CalcularOhm}>
            Calcular OhM
          </Button>
        </Col>
      </Row>
      <br />
      <Row>
        <Col>Valor de OhMs según colores seleccionados:</Col>
      </Row>
      <Row>
        <Col>
          <h1>{ohmValue}</h1>
        </Col>
      </Row>
    </div>
  );
}
