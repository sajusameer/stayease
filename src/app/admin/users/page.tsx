"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";

interface User {
  _id: string;
  name: string;
  email: string;
  role: "admin" | "user";
  createdAt: string;
}

export default function AdminUsersPage() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    // পরে API থেকে data আসবে
    setUsers([
      {
        _id: "1",
        name: "Admin User",
        email: "admin@example.com",
        role: "admin",
        createdAt: "2026-07-14",
      },
      {
        _id: "2",
        name: "John Doe",
        email: "john@example.com",
        role: "user",
        createdAt: "2026-07-14",
      },
    ]);
  }, []);

  const changeRole = (id: string) => {
    setUsers((prev) =>
      prev.map((user) =>
        user._id === id
          ? {
              ...user,
              role:
                user.role === "admin"
                  ? "user"
                  : "admin",
            }
          : user
      )
    );

    toast.success("Role updated.");
  };

  return (
    <section>

      <h1 className="mb-8 text-4xl font-bold">
        Manage Users
      </h1>

      <div className="overflow-x-auto rounded-2xl bg-white shadow">

        <table className="table">

          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Joined</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>

            {users.map((user) => (

              <tr key={user._id}>

                <td>{user.name}</td>

                <td>{user.email}</td>

                <td>

                  <span
                    className={`badge ${
                      user.role === "admin"
                        ? "badge-primary"
                        : "badge-success"
                    }`}
                  >
                    {user.role}
                  </span>

                </td>

                <td>
                  {new Date(
                    user.createdAt
                  ).toLocaleDateString()}
                </td>

                <td>

                  <button
                    className="btn btn-sm btn-primary"
                    onClick={() => changeRole(user._id)}
                  >
                    Change Role
                  </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </section>
  );
}