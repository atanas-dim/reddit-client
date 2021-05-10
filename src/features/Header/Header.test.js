import { shallow } from 'enzyme';
import Header from './Header';

describe('Header component', () => {

    it('displays Reddit text next to the logo', () => {
        const wrapper = shallow(
                <Header />
        );
        
        const logoText = 'Reddit';
        const text = wrapper.find('h1').text();
        expect(text).toEqual(logoText);
    })
    
})