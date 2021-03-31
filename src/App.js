import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import "./style.css";

const HomePage = lazy(() => import('./routes/home'));
const QnAGamePage = lazy(() => import('./routes/qna-game'));
const QuizGamePage = lazy(() => import('./routes/quiz-game'));

export default function App() {
  return (
    <div>      
      <h1 style={{ textAlign: 'center' }}>Tech Mania!</h1>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/quiz-game" component={QuizGamePage} />
            <Route path="/qna-game" component={QnAGamePage} />
          </Switch>
        </Suspense>
      </Router>

    </div>
  );
}
