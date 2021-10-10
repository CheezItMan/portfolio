import { isSuperAdmin } from './is_super_admin';

describe('isSuperAdmin', () => {
    test('With Valid administrator', () => {
        // Arrange
        const users = ['mcanallyc@gmail.com', 'rpatel01@wesleyan.edu', 'chris@adadevelopersacademy.org']

        // Act-Assert
        users.forEach((user) => {
            expect(isSuperAdmin(user)).toEqual(true);
        });
    });

    test('Will return false with similarish emails', () => {
        // Arrange
        const users = ['mcanallyc@gmail.comm', 'rrpatel01@wesleyan.edu', 'chris@adadevelopersacademy.or']

        // Act-Assert
        users.forEach((user) => {
            expect(isSuperAdmin(user)).toEqual(false);
        });
    });

    test('Will return false with incorrect emails', () => {
        // Arrange
        const users = ['bob@bob.com', '']

        // Act-Assert
        users.forEach((user) => {
            expect(isSuperAdmin(user)).toEqual(false);
        });
    });
});