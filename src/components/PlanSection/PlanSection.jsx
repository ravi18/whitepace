import React from "react";
import {
  Container,
  Typography,
  Grid as Grid2,
  Card,
  CardContent,
  CardActions,
  Button,
  List,
  ListItem,
  ListItemIcon,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export default function PlanSection() {
  return (
    <Container maxWidth="md" sx={{ paddingTop: "40px", paddingBottom: "40px" }}>
      <Typography
        variant="h2"
        sx={{ fontWeight: "bold", fontSize: { xs: "2rem", md: "3rem" } }}
        align="center"
        gutterBottom
      >
        Choose Your Plan
      </Typography>
      <Typography variant="body1" align="center" paragraph>
        Whether you want to get organized, keep your personal life on track, or
        boost workplace productivity, Evernote has the right plan for you.
      </Typography>
      <Grid2 container spacing={28} justifyContent="center" alignItems="center">
        <Grid2 item xs={12} sm={6} md={4}>
          <Card
            sx={{ width: "350px", borderColor: "#FFE492" }}
            variant="outlined"
          >
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Free
              </Typography>
              <Typography
                sx={{ fontWeight: "bold" }}
                variant="h4"
                color="textPrimary"
                gutterBottom
              >
                $0
              </Typography>
              <Typography variant="body2" paragraph>
                Capture ideas and find them quickly
              </Typography>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleIcon color="success" />
                  </ListItemIcon>
                  Sync unlimited devices
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleIcon color="success" />
                  </ListItemIcon>
                  10 GB monthly uploads
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleIcon color="success" />
                  </ListItemIcon>
                  200 MB max. note size
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleIcon color="success" />
                  </ListItemIcon>
                  Customize Home dashboard and access extra widgets
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleIcon color="success" />
                  </ListItemIcon>
                  Connect primary Google Calendar account
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleIcon color="success" />
                  </ListItemIcon>
                  Add due dates, reminders, and notifications to your tasks
                </ListItem>
              </List>
            </CardContent>
            <CardActions>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#fff",
                  color: "#000",
                  fontWeight: "bold",
                  "&:hover": { backgroundColor: "#fff" },
                }}
              >
                Get Started
              </Button>
            </CardActions>
          </Card>
        </Grid2>

        <Grid2 item xs={12} sm={6} md={4}>
          <Card
            sx={{ backgroundColor: "#0e346b", color: "white", width: "350px" }}
          >
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Personal
              </Typography>
              <Typography
                sx={{ fontWeight: "bold", color: "#FFE492" }}
                variant="h4"
                gutterBottom
              >
                $11.99
              </Typography>
              <Typography variant="body2" paragraph>
                Keep home and family on track
              </Typography>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleIcon sx={{ color: "#66bb6a" }} />
                  </ListItemIcon>
                  Sync unlimited devices
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleIcon sx={{ color: "#66bb6a" }} />
                  </ListItemIcon>
                  10 GB monthly uploads
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleIcon sx={{ color: "#66bb6a" }} />
                  </ListItemIcon>
                  200 MB max. note size
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleIcon sx={{ color: "#66bb6a" }} />
                  </ListItemIcon>
                  Customize Home dashboard and access extra widgets
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleIcon sx={{ color: "#66bb6a" }} />
                  </ListItemIcon>
                  Connect primary Google Calendar account
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleIcon sx={{ color: "#66bb6a" }} />
                  </ListItemIcon>
                  Add due dates, reminders, and notifications to your tasks
                </ListItem>
              </List>
            </CardContent>
            <CardActions>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#6ab0ff",
                  color: "#ffffff",
                  fontWeight: "bold",
                  "&:hover": { backgroundColor: "#5a9ce6" },
                }}
              >
                Get Started
              </Button>
            </CardActions>
          </Card>
        </Grid2>

        <Grid2 item xs={12} sm={6} md={4}>
          <Card
            sx={{ width: "350px", borderColor: "#FFE492" }}
            variant="outlined"
          >
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Organization
              </Typography>
              <Typography
                sx={{ fontWeight: "bold" }}
                variant="h4"
                color="textPrimary"
                gutterBottom
              >
                $49.99
              </Typography>
              <Typography variant="body2" paragraph>
                Perfect for growing teams
              </Typography>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleIcon color="success" />
                  </ListItemIcon>
                  Sync unlimited devices
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleIcon color="success" />
                  </ListItemIcon>
                  50 GB monthly uploads
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleIcon color="success" />
                  </ListItemIcon>
                  500 MB max. note size
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleIcon color="success" />
                  </ListItemIcon>
                  Advanced integrations with Slack and Salesforce
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleIcon color="success" />
                  </ListItemIcon>
                  Share and collaborate in real-time
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleIcon color="success" />
                  </ListItemIcon>
                  Manage tasks across the team
                </ListItem>
              </List>
            </CardContent>
            <CardActions>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#fff",
                  color: "#000",
                  fontWeight: "bold",
                  "&:hover": { backgroundColor: "#fff" },
                }}
              >
                Get Started
              </Button>
            </CardActions>
          </Card>
        </Grid2>
      </Grid2>
    </Container>
  );
}
