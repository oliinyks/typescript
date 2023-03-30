import { useRouter } from "next/router";
import MainLayout from "../../layouts/MainLayout";
import { Box, Grid, Card, Button } from "@mui/material";
import { ITrack } from "../../types/track";
import track from '../../track.json';
import TrackList from "../../components/TrackList";

const Index = () => {
	const router = useRouter();
	const tracks: ITrack[] = [
    {
      _id: "1",
      name: "Song One",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      listens: 1000,
      picture:
        "https://www.shutterstock.com/image-vector/vector-cartoon-music-note-icon-260nw-1165584241.jpg",
      audio: "https://example.com/song-one.mp3",
      comments: [
        {
          _id: "1",
          text: "Great song!",
          username: "John",
        },
        {
          _id: "2",
          text: "Love it!",
          username: "Mary",
        },
      ],
    },
    {
      _id: "2",
      name: "Song Two",
      text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
      listens: 500,
      picture:
        "https://www.shutterstock.com/image-vector/vector-cartoon-music-note-icon-260nw-1165584241.jpg",
      audio: "https://example.com/song-two.mp3",
      comments: [],
    },
    {
      _id: "3",
      name: "Song Three",
      text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      listens: 2000,
      picture:
        "https://www.shutterstock.com/image-vector/vector-cartoon-music-note-icon-260nw-1165584241.jpg",
      audio: "https://example.com/song-three.mp3",
      comments: [
        {
          _id: "3",
          text: "Amazing track!",
          username: "Peter",
        },
      ],
    },
  ];


  return (
    <MainLayout title={'Tracks'}>
      <Grid container justifyContent="center">
        <Card style={{ width: 900 }}>
          <Box p={3}>
            <Grid container justifyContent="space-between">
              <h1>Track list</h1>
              <Button
                onClick={() => router.push("tracks/create")}
                variant="outlined"
              >
                Upload
              </Button>
            </Grid>
          </Box>
          <TrackList tracks={tracks} />
        </Card>
      </Grid>
    </MainLayout>
  );
};

export default Index;
