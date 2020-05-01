import React from 'react';
import { Link } from 'react-router-dom';

import * as ROUTES from './Route';

const Navigation = () => (
    <div>

        <Link to={ROUTES.LOGIN} />

        <Link to={ROUTES.SIGN_UP} />

        <Link to={ROUTES.TEST}/>

        <Link to={ROUTES.AskQuestion}/>

    </div>
);

export default Navigation;