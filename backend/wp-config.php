<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wonderfestiwall_dk_wonderfestiwall' );

/** MySQL database username */
define( 'DB_USER', 'wonderfestiwall_dk_wonderfestiwall' );

/** MySQL database password */
define( 'DB_PASSWORD', 'wonderdatabase' );

/** MySQL hostname */
define( 'DB_HOST', 'wonderfestiwall.dk.mysql' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '(rZ[R7$E*88`j)2Ld^e3x~0^Q)LK&}q!qW)[1d[@Rs03~j4&{c9T3|3o9c<Nq-Pr' );
define( 'SECURE_AUTH_KEY',  ']*YOJC5fu>=).zHQ4>Rf~u&*AUjb_BRrQhHY0j?kOhdV_1u.R_zjfKh(X?c D`t?' );
define( 'LOGGED_IN_KEY',    '@ eJR5`_;8 )yx&SSSKi~u3os!gfJrqv>Fsuujipa1DD..x-jD@oaZs{GgQr4dD#' );
define( 'NONCE_KEY',        'z9H?jW.vU02i+1YYZ@tUzv!sH5bY<qW5qQq23Vf._6zqj^U_}cj:y>sl<[?lwt)5' );
define( 'AUTH_SALT',        'JS=b7 ?qt8w}Z([9N93eTd&_YNTkn|:6EB<Q&pN<bzv|w%g,9+a((mf@Mt<&2o(G' );
define( 'SECURE_AUTH_SALT', '&I5tj~OFE8h}xD^gtV=&^M$xR1Y& a%KhV(08sLqCLy82n^kbu}OZ;SAmKFVFznj' );
define( 'LOGGED_IN_SALT',   '?%sw.ef*L?4+D56qDalatw~ZWD;&z6wT|-Uu&$5Z];E&C]mr&?&*8YuA!8vU6L^<' );
define( 'NONCE_SALT',       'snl}~3l?:v YkQWAP{n86IG{9~gl2B?Fk.>qj|2a`y#1c?g[HdUm a9-e|=+li^J' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wonderbackend_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once( ABSPATH . 'wp-settings.php' );
