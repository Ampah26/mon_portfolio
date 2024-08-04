// passport-config.js
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

// Exemple de configuration de la stratégie locale
passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
}, async (email, password, done) => {
    try {
        // Ici, vous pouvez ajouter la logique pour vérifier les utilisateurs
        // Exemple :
        const user = await getUserByEmail(email); // Fonction pour obtenir un utilisateur par email
        if (!user) {
            return done(null, false, { message: 'Email incorrect' });
        }

        if (password !== user.password) {
            return done(null, false, { message: 'Mot de passe incorrect' });
        }

        return done(null, user);
    } catch (err) {
        return done(err);
    }
}));

// Exemple de configuration de la stratégie JWT
passport.use(new JwtStrategy({
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'test'
}, (jwtPayload, done) => {
    try {
        // Logique pour traiter le payload JWT
        return done(null, jwtPayload);
    } catch (err) {
        return done(err);
    }
}));

module.exports = passport;
