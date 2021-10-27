import {render, fireEvent, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import Contact from './contact';

describe('Contact Form Testing', () => {
    test('loads and displays "Contact"', () => {
        render(<Contact onSendMsg={() => {} } />);
        
        expect(screen.getAllByRole('heading')[0]).toHaveTextContent('Contact')
    });

    test('User can type into the input fields', () => {
        render(<Contact onSendMsg={() => {} }
        />);

        const fieldLabels = ['Your Name', 'Your Email', 'Subject', 'Message'];

        fieldLabels.forEach((fieldLabel) => {
            let input = screen.getByLabelText(fieldLabel);
            expect(input).toHaveValue('');
            fireEvent.change(input, { target: { value: 'example' }});
            input = screen.getByLabelText(fieldLabel);
            expect(input).toHaveValue('example');
        });
    });

    test('When submitting the callback function will be called', () => {
        const callBackFunction = jest.fn();
        render(<Contact onSendMsg={callBackFunction } />);

        const fields = [
            {label: 'Your Name', text: 'bob'}, 
            {label: 'Your Email', text: 'bob@bob.com'}, 
            {label: 'Subject', text: 'I like bob'}, 
            {label: 'Message', text: 'Bob is great'}
        ];

        fields.forEach((field) => {
            let input = screen.getByLabelText(field.label);
            expect(input).toHaveValue('');
            fireEvent.change(input, { target: { value: field.text }});
            input = screen.getByLabelText(field.label);
            expect(input).toHaveValue(field.text);
        });

        const submitButton = screen.getByText('Send Email');
        fireEvent.click(submitButton);
        expect(callBackFunction).toHaveBeenCalled();
    });
});