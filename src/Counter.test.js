import { render,fireEvent,screen } from "@testing-library/react"
import Counter from "./Counter"
test("Render the Counter Component without errors",()=>{
    const {getByText}=render(<Counter />)
    const buttonElement=getByText('IncValue');
    
    expect(buttonElement).toBeInTheDocument();
})

test('start with count at 0', () => { 
    
    const {getByText}=render(<Counter />);
    const countelement=getByText('0')
    expect(countelement).toBeInTheDocument();

})

test("Increments Counts",()=>{
    const {getByText}=render(<Counter />);
    const countelement=getByText('0')
    const buttonElement=getByText('IncValue');
fireEvent.click(buttonElement);
expect(countelement.textContent).toBe('10');
})

