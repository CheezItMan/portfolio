import {render, fireEvent, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import Contact from './contact';

describe('Contact Form Testing', () => {
    test('loads and displays "Contact"', () => {
        render(<Contact 
            name="Charles Barkley"
            email="charles@nickes.com"
            lat={3}
            lon={4}
            city="Seattle"
            state="Washington"
            onSendMsg={() => {} }
        />);
        
        expect(screen.getByRole('heading')).toHaveTextContent('Contact')
    });

    test('User can type into the input fields', () => {
        render(<Contact 
            name="Charles Barkley"
            email="charles@nickes.com"
            lat={3}
            lon={4}
            city="Seattle"
            state="Washington"
            onSendMsg={() => {} }
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
        render(<Contact 
            name="Charles Barkley"
            email="charles@nickes.com"
            lat={3}
            lon={4}
            city="Seattle"
            state="Washington"
            onSendMsg={callBackFunction }
        />);

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