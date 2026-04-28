
import { Navbar, Nav, Container } from 'react-bootstrap';


function App() {
  return (
    <Container className="mt-4">
      <Navbar bg="light" expand="lg" className="mb-4 rounded shadow-sm">
        <Container>
          <Navbar.Brand as={NavLink} to="/">Octofit Tracker</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={NavLink} to="/activities">Activities</Nav.Link>
              <Nav.Link as={NavLink} to="/leaderboard">Leaderboard</Nav.Link>
              <Nav.Link as={NavLink} to="/teams">Teams</Nav.Link>
              <Nav.Link as={NavLink} to="/users">Users</Nav.Link>
              <Nav.Link as={NavLink} to="/workouts">Workouts</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/activities" element={<Activities />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/users" element={<Users />} />
        <Route path="/workouts" element={<Workouts />} />
        <Route path="/" element={<div className="text-center"><h1 className="display-4">Willkommen zum Octofit Tracker!</h1><p className="lead">Deine Fitness, dein Team, dein Fortschritt.</p></div>} />
      </Routes>
    </Container>
  );
}

export default App;
