import React, { useEffect, useMemo, useState } from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import { FaCheckCircle } from "react-icons/fa";
import { IoIosCloseCircle } from "react-icons/io";
import { Link } from "react-router";

export default function Register() {
  const [username, setUsername] = useState("");
  const [isUsernameValid, setIsUsernameValid] = useState(false);
  const [usernameFocus, setUsernameFocus] = useState(false);

  const [password, setPassword] = useState("");
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);

  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordsMatch, setPasswordsMatch] = useState(false);
  const [confirmPasswordFocus, setConfirmPasswordFocus] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");

  const [success, setSuccess] = useState(false);
  //   const [successMessage, setSuccessMessage] = useState("");

  const usernameRegex = useMemo(
    () => new RegExp("^[a-zA-Z][a-zA-Z0-9_-]{3,23}$"),
    // () => new RegExp("^[a-zA-Z0-9][a-zA-Z0-9_-].{2,31}$"), // GPT
    [],
  );

  const passwordRegex = useMemo(
    () =>
      new RegExp(
        // "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_=-]).{8,24}$",
        "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$",
      ),
    [],
  );

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!usernameRegex.test(username) || !passwordRegex.test(password)) {
      setErrorMessage("Invalid data");
      return;
    }
    setSuccess(true);
  };

  useEffect(() => {
    setIsUsernameValid(usernameRegex.test(username));
  }, [usernameRegex, username]);

  useEffect(() => {
    setIsPasswordValid(passwordRegex.test(password));
    setPasswordsMatch(isPasswordValid && password === confirmPassword);
  }, [passwordRegex, password, confirmPassword, isPasswordValid]);

  if (success)
    return (
      <main className="min-h-screen place-items-center content-center dark:bg-slate-900 dark:text-slate-100">
        <section className="w-xs place-items-center rounded-lg p-5 dark:bg-slate-700">
          <h1 className="dark:text-green-400">Registration Successfull</h1>
          <Link
            to="/login"
            className="cursor-pointer underline dark:text-sky-500 dark:hover:text-sky-400"
          >
            SignIn
          </Link>
        </section>
      </main>
    );

  // aria is for screen reader
  return (
    <main className="min-h-screen place-items-center content-center dark:bg-slate-900 dark:text-slate-100">
      <form
        className="flex w-xs flex-col rounded-lg p-5 dark:bg-slate-700"
        onSubmit={handleRegister}
      >
        {errorMessage && <p aria-live="assertive">{errorMessage}</p>}

        <h1 className="text-xl font-bold">Register</h1>

        <label htmlFor="username" className="mt-5 mb-2 flex items-center gap-2">
          Username
          {username &&
            (isUsernameValid ? (
              <FaCheckCircle
                //   className="my-2 rounded-full bg-white text-green-500"
                className="text-green-500"
              />
            ) : (
              <IoIosCloseCircle className="rounded-full bg-white text-red-500" />
            ))}
        </label>
        <input
          type="text"
          id="username"
          value={username}
          placeholder="Enter your username"
          className="rounded-md p-1 dark:bg-slate-500 dark:text-black"
          onChange={(e) => setUsername(e.target.value)}
          onFocus={() => setUsernameFocus(true)}
          onBlur={() => setUsernameFocus(false)}
          autoComplete="off" // forgot
          required // forgot
          aria-invalid={!isUsernameValid}
          aria-describedby="uidnote"
          autoFocus
        />
        {username && !isUsernameValid && usernameFocus && (
          <div
            id="uidnote"
            className="mt-2 rounded-md p-1 text-xs dark:bg-slate-900 dark:text-white"
          >
            <p className="w-full">
              <BsInfoCircleFill className="mr-1 inline" />
              4 to 24 Characters
              <br />
              Must begin with a letter.
              <br />
              Allowed: Alphabets,numbers,underscore,hyphen
            </p>
          </div>
        )}

        <label htmlFor="password" className="mt-3 flex items-center gap-2">
          Password
          {password &&
            (isPasswordValid ? (
              <FaCheckCircle
                //   className="my-2 rounded-full bg-white text-green-500"
                className="my-2 text-green-500"
              />
            ) : (
              <IoIosCloseCircle
                //   className="my-2 rounded-full bg-white text-green-500"
                className="my-2 rounded-full bg-white text-red-500"
              />
            ))}
        </label>
        <input
          type="password"
          id="password"
          value={password}
          placeholder="Enter your password"
          className="rounded-md p-1 dark:bg-slate-500 dark:text-black"
          onChange={(e) => setPassword(e.target.value)}
          onFocus={() => setPasswordFocus(true)}
          onBlur={() => setPasswordFocus(false)}
        />
        {password && !isPasswordValid && passwordFocus && (
          <div className="mt-2 rounded-md p-1 text-xs dark:bg-slate-900 dark:text-white">
            <p className="w-full">
              <BsInfoCircleFill className="mr-1 inline" />
              8 to 24 Characters
              <br />
              Must : lowercase + uppercase + digit + special
              <br />
              Allowed special characters: ! @ # $ %
            </p>
          </div>
        )}

        <label
          htmlFor="confirmPassword"
          className="mt-3 flex items-center gap-2"
        >
          ConfirmPassword
          {confirmPassword &&
            (passwordsMatch ? (
              <FaCheckCircle
                //   className="my-2 rounded-full bg-white text-green-500"
                className="my-2 text-green-500"
              />
            ) : (
              <IoIosCloseCircle className="my-2 rounded-full bg-white text-red-500" />
            ))}
        </label>
        <input
          type="password"
          id="confirmPassword"
          value={confirmPassword}
          placeholder="Enter password again"
          className="rounded-md p-1 dark:bg-slate-500 dark:text-black"
          onChange={(e) => setConfirmPassword(e.target.value)}
          onFocus={() => setConfirmPasswordFocus(true)}
          onBlur={() => setConfirmPasswordFocus(false)}
        />
        {confirmPassword && !passwordsMatch && confirmPasswordFocus && (
          <div className="mt-2 rounded-md p-1 text-xs dark:bg-slate-900 dark:text-white">
            <p className="w-full">
              <BsInfoCircleFill className="mr-1 inline" />
              passwords do not match
            </p>
          </div>
        )}

        <button
          className="mt-5 cursor-pointer rounded-lg p-2 dark:bg-slate-400 dark:text-white dark:hover:bg-slate-300 dark:hover:text-black dark:disabled:cursor-not-allowed"
          disabled={!(isUsernameValid && isPasswordValid && passwordsMatch)}
        >
          Register
        </button>
      </form>

      <div className="mt-5 flex w-xs justify-center gap-4 rounded-lg py-2 dark:bg-slate-900">
        <p className="dark:text-green-500">Already registered?</p>
        <Link
          to="/login"
          className="cursor-pointer underline dark:text-blue-400 dark:hover:text-blue-200"
        >
          SignIn
        </Link>
      </div>
    </main>
  );
}
