import React from 'react';
import { Link } from 'react-router-dom';

import * as ROUTES from './Route';

const Navigation = () => (
    <div>

        <Link to={ROUTES.LOGIN} />

        <Link to={ROUTES.SIGN_UP} />

        <Link to={ROUTES.MAINPAGE}/>

        <Link to={ROUTES.AskQuestion}/>

        <Link to={ROUTES.TEST}/>

    </div>
);

export default Navigation;