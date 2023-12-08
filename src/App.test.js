import { fireEvent, render, screen } from '@testing-library/react';
import axios from 'axios';
import  Address  from './components/address';
import App from './App';

jest.mock('axios')
// Mock the child component
jest.mock('./components/address', () => {
  return ({ setState }) => (
    <button data-testid='childBtn' onClick={() => setState('y')}>
      Mocked Y Component
    </button>
  );
});
describe('App test', () =>{
  beforeAll(() => {
  })
  test('renders form display', () => {
    render(<App />);
    const labelElement= screen.getByText(/Username:/i);
    expect(labelElement).toBeInTheDocument();
  });
  
  test('check on username change', async () => {
    render(<App />);
    const inputElement= screen.getByTestId(/Username/i);
    await fireEvent.change(inputElement, { target: { value: 'testuser' } });
    expect(inputElement.value).toBe('testuser');
    // expect(usernameInput.value).toBe('testuser');
    // expect(inputElement).toBeInTheDocument();
  });
  
  test('check on the password change', async () => {
    render(<App/>);
    const passwordElement = screen.getByTestId(/password/i);
    await fireEvent.change(passwordElement, {target: {value: 'superman'}})
    expect(passwordElement.value).toBe('superman');
  
  })

  test('on form submit',async () => {
    axios.get.mockResolvedValue({data:'scucces'})

    render(<App/>);
    const btn = screen.getByTestId(/submitbtn/i);
    await fireEvent.click(btn);

  });

  it('On Child Change', async()=> {
    const childOnChange = jest.fn();
    const { rerender } = render(<App/>)
    const btn = screen.getByTestId(/childBtn/i); 
    await fireEvent.click(btn);
    rerender()
    expect(btn).toBeTruthy()
  })
})


