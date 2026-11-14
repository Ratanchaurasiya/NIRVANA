<?php
/**
 * Nirvana Group - Secure Administration Dashboard Login
 */
require_once __DIR__ . '/../includes/functions.php';

// Redirect if already authenticated
if (!empty($_SESSION['admin_user_id'])) {
    header("Location: index.php");
    exit;
}

$error = '';
$csrfToken = generateCsrfToken();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $submittedToken = $_POST['csrf_token'] ?? '';
    if (!verifyCsrfToken($submittedToken)) {
        $error = 'Security session expired. Please retry.';
    } else {
        $username = trim($_POST['username'] ?? '');
        $password = trim($_POST['password'] ?? '');

        if (empty($username) || empty($password)) {
            $error = 'Please enter both username and password.';
        } else {
            try {
                $pdo = getDBConnection();
                $stmt = $pdo->prepare("SELECT * FROM admin_users WHERE (username = ? OR email = ?) AND is_active = 1 LIMIT 1");
                $stmt->execute([$username, $username]);
                $user = $stmt->fetch();

                if ($user && password_verify($password, $user['password_hash'])) {
                    // Regenerate session ID to prevent fixation
                    session_regenerate_id(true);
                    $_SESSION['admin_user_id'] = $user['id'];
                    $_SESSION['admin_username'] = $user['username'];
                    $_SESSION['admin_role'] = $user['role'];

                    // Update last login timestamp
                    $pdo->prepare("UPDATE admin_users SET last_login = NOW() WHERE id = ?")->execute([$user['id']]);

                    header("Location: index.php");
                    exit;
                } else {
                    $error = 'Invalid credentials provided.';
                }
            } catch (Exception $e) {
                error_log("Login error: " . $e->getMessage());
                $error = 'Authentication system error. Check database status.';
            }
        }
    }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Admin Authentication | <?= SITE_NAME ?></title>
  <link rel="icon" type="image/svg+xml" href="<?= BASE_URL ?>/assets/favicon.svg">
  <link rel="stylesheet" href="<?= BASE_URL ?>/assets/css/style.css">
</head>
<body class="bg-[#070D1E] text-slate-100 min-h-screen flex items-center justify-center p-4">

  <div class="max-w-md w-full glass-panel-gold rounded-3xl p-8 sm:p-10 border border-amber-500/40 shadow-2xl space-y-6">
    
    <div class="text-center space-y-2">
      <div class="w-12 h-12 rounded-2xl bg-gold-gradient p-0.5 mx-auto flex items-center justify-center">
        <div class="w-full h-full bg-[#070D1E] rounded-[14px] flex items-center justify-center">
          <svg viewBox="0 0 100 100" class="w-7 h-7" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 12 L84 78 H68 L50 42 L32 78 H16 L50 12 Z" fill="#D4AF37" />
            <path d="M36 60 H64 V68 H36 V60 Z" fill="#F3E5AB" />
          </svg>
        </div>
      </div>
      <h1 class="text-2xl font-serif font-bold text-white tracking-tight">NIRVANA GROUP</h1>
      <p class="text-xs font-mono uppercase tracking-widest text-amber-400">Master Administration Portal</p>
    </div>

    <?php if ($error): ?>
      <div class="p-3.5 rounded-xl bg-red-950/80 border border-red-500/40 text-red-200 text-xs font-medium">
        <?= htmlspecialchars($error) ?>
      </div>
    <?php endif; ?>

    <form method="POST" action="login.php" class="space-y-4">
      <input type="hidden" name="csrf_token" value="<?= $csrfToken ?>">

      <div class="space-y-1.5">
        <label class="text-xs font-semibold uppercase tracking-wider text-slate-300">Username or Email</label>
        <input
          type="text"
          name="username"
          required
          autofocus
          placeholder="admin"
          class="w-full bg-[#070D1E] border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-400"
        >
      </div>

      <div class="space-y-1.5">
        <label class="text-xs font-semibold uppercase tracking-wider text-slate-300">Password</label>
        <input
          type="password"
          name="password"
          required
          placeholder="••••••••"
          class="w-full bg-[#070D1E] border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-400"
        >
      </div>

      <button
        type="submit"
        class="w-full py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider text-navy-950 bg-gold-gradient shadow-lg hover:shadow-[0_0_25px_rgba(212,175,55,0.6)] transition-all cursor-pointer mt-2"
      >
        Sign In to Dashboard →
      </button>
    </form>

    <div class="text-center pt-2">
      <a href="<?= BASE_URL ?>/" class="text-xs text-slate-400 hover:text-amber-300 transition-colors">
        ← Return to Nirvana Group Public Portal
      </a>
    </div>

  </div>

</body>
</html>
