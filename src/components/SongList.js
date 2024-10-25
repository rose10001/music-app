import React from 'react';
import { List, Avatar } from 'antd';
import { HeartOutlined } from '@ant-design/icons';

const SongList = ({ songs, onSelect }) => {
  return (
    <List
      itemLayout="horizontal"
      dataSource={songs}
      renderItem={(song, index) => (
        <List.Item onClick={() => onSelect(index)} actions={[<HeartOutlined key="heart" />]}>
          <List.Item.Meta
            avatar={<Avatar src={song.image} />}
            title={song.name}
            description={song.singer}
          />
          <div>{song.duration}</div>
        </List.Item>
      )}
    />
  );
};

export default SongList;
