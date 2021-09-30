import { v4 as uuidv4 } from 'uuid';
import { RefreshToken } from '../models/RefreshToken';

const refreshToken = {
    JwtId: uuidv4(),
    Token: uuidv4(),
    CreateDate: Date.now(),
    Expires: Date.now() + 100,
    Used: false,
    Invalidated: false,
    UserId: uuidv4()
};

describe("Testing Refresh Tokens", () => {
    test("Adding a refresh token", async () => {
        const token = new RefreshToken(refreshToken);
        await token.save();
    })

    test("Find refresh token", async () => {
        const found = await RefreshToken.find({JwtId: refreshToken.JwtId});
        expect(found).toBe(refreshToken);
    })

    test("Should be invalidated after expires", async () => {
        const find: any = await RefreshToken.find({JwtId: refreshToken.JwtId});

        if (find.CreatedDate < find.Expires) {
            find.Invalidated = true;
            expect(find.Invalidated).toBeTruthy();
        }
        else expect(find.Invalidated).toBeFalsy();
    })
})