import React from 'react';
import { Slider } from 'antd';
import { PlayCircleOutlined, PauseCircleOutlined, StepBackwardOutlined, StepForwardOutlined } from '@ant-design/icons';

const NowPlaying = ({ song }) => {
  return (
    <div className="now-playing">
      <div className="cd-thumb" style={{ backgroundImage: `url(${song.image})` }}></div>
      <h2>{song.name}</h2>
      <h4>{song.singer}</h4>
      <Slider defaultValue={30} />
      <div className="controls">
        <StepBackwardOutlined className="control-icon" />
        <PlayCircleOutlined className="control-icon" />
        <PauseCircleOutlined className="control-icon" />
        <StepForwardOutlined className="control-icon" />
      </div>
    </div>
  );
};

export default NowPlaying;
