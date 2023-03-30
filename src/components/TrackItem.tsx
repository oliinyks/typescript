import React from "react";
import { ITrack } from "../types/track";
import { Card, IconButton, Grid } from "@mui/material";
import styles from "../styles/TrackItem.module.scss";
import { Pause, PlayArrow, Delete } from "@mui/icons-material";
import Image from "next/image";
import imageLoader from "../imageLoader";
import { useRouter } from 'next/router';

interface TrackItemProps {
  track: ITrack;
  active?: boolean;
}

const TrackItem: React.FC<TrackItemProps> = ({ track, active = false }) => {
	const router = useRouter();
	
	return (
    <Card className={styles.track} onClick={()=> router.push('/tracks/' + track._id)}>
      <IconButton onClick={e => e.stopPropagation()}>{active ? <Pause /> : <PlayArrow />}</IconButton>
      <Image
        loader={imageLoader}
        unoptimized
        width={70}
        height={70}
        src={track.picture}
        alt={track.name}
      />
      <Grid container direction="column" style={{ margin: '0 20px'}}>
        <p>{track.name}</p>
        <p style={{fontSize: 12, color: 'gray'}}>{track.text}</p>
		  </Grid>
		  {active && <div>02:42 / 03:22</div>}
		  <IconButton  onClick={e => e.stopPropagation()} style={{marginLeft: 'auto'}}>
			  <Delete/>
		  </IconButton>
    </Card>
  );
};

export default TrackItem;
