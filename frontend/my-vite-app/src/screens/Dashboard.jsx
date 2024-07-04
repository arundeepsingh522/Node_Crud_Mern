import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Dashboard = ({ message, users }) => {
    users= {
        "users": []
    };
  return (
    <>
      <Header />
      <div className="container mx-auto p-4">
        <div className="my-4">
          <div>
            {message && (
              <div className={`alert alert-${message.type} mb-4`} role="alert">
                <button className="close" type="button" data-dismiss="alert" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
                <strong>{message.message}</strong>
              </div>
            )}
            <div className="overflow-x-auto">
              {users && users.length > 0 ? (
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-800 text-white">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">ID</th>
                      <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Image</th>
                      <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Name</th>
                      <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Email</th>
                      <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Phone</th>
                      <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Action</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {users.map((row, index) => (
                      <tr key={index} className="align-middle">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{index}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <img src={row.image} alt="user" className="w-12 h-12 object-cover rounded-md" />
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{row.name}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{row.email}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{row.phone}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          <a href={`/edit/${row._id}`} className="text-green-600 hover:text-green-900 mx-1">
                            <i className="fas fa-edit fa-lg"></i>
                          </a>
                          <a href={`/delete/${row._id}`} className="text-red-600 hover:text-red-900 mx-1">
                            <i className="fas fa-trash fa-lg"></i>
                          </a>
                          <a href={`/email/${row._id}`} className="text-blue-600 hover:text-blue-900 mx-1">
                            Email
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <h1 className="text-center text-gray-500 mt-5">No user found in the database</h1>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
