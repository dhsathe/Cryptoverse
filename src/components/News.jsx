import React, { useState } from 'react';
import { Avatar, Card, Col, Row, Select, Typography } from 'antd';
import moment from 'moment';
import { useGetCryptosNewsQuery } from '../services/cryptoNewsApi';
const { Text, Title } = Typography;
const { Option } = Select;

const News = ({ simplified }) => {
  const { data: cryptosNews, isFetching } = useGetCryptosNewsQuery({ newsCategory: 'Cryptocurrency', count: simplified ? 10 : 100 });

  if (isFetching) return <div>Loading ...</div>;
  console.log(cryptosNews);
  return <div>news</div>;
};

export default News;
