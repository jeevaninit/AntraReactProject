import { render, screen } from '@testing-library/react';
import App from './App';
import Header from './Header';


test('renders Welcome to note', () => {
const {getByText}=render(<Header />);
const headingcontent=getByText('Welcome to React Test Cases');

expect(headingcontent).toBeInTheDocument();

});

