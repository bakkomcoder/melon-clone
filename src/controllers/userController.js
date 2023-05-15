import Song from "../models/Song";
import User from "../models/User";

export const see = async (req, res) => {};

export const getJoin = (req, res) => {
  res.render("join", { pageTitle: "회원가입" });
};

export const postJoin = async (req, res) => {
  const pageTitle = "회원가입";
  const { username, email, password, password2 } = req.body;
  if (password !== password2) {
    return res.status(400).render("join", {
      // 서버가 요청의 구문을 이해하지 못함
      pageTitle,
      errorMessage: "비밀번호가 일치하지 않아요 🥲",
    });
  }
  const exists = await User.exists({ $or: [{ username }, { email }] });
  if (exists) {
    return res.status(400).render("join", {
      pageTitle,
      errorMessage: "이미 존재하는 이름/이메일이에요 🥲",
    });
  }
  try {
    await User.create({
      username,
      email,
      password,
    });
    return res.render("login");
  } catch (error) {
    console.log(error);
    console.log(error._message);
    return res.render("join", {
      pageTitle: "회원가입",
      errorMessage: error._message,
    });
  }
};

export const getLogin = (req, res) => {
  res.render("login", { pageTitle: "로그인" });
};

export const postLogin = async (req, res) => {
  const pageTitle = "로그인";
  const user = await User.findOne({ username });
  if (!user) {
    return res.status(400).render("login", {
      pageTitle,
      errorMessage: "존재하지 않는 이름이에요 🥲",
    });
  }
  const { username, password } = req.body;
  const ok = await bcrypt.compare(password, user.password);
  if (!ok) {
    return res.status(400).render("login", {
      pageTitle,
      errorMessage: "잘못된 비밀번호에요 🥲",
    });
  }
  return res.redirect("/");
};

export const logout = async (req, res) => {};

export const edit = async (req, res) => {};

export const password = async (req, res) => {};
