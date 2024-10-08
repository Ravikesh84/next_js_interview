import React, { useState } from "react";
import { Button, TextInput } from "flowbite-react";
import { HiPlus, HiX, HiTrash } from "react-icons/hi";

interface CreateRequestMainComponentProps {}

export function CreateRequestMainComponent(props: CreateRequestMainComponentProps) {
  const [urls, setUrls] = useState([""]);

  const handleAddUrl = () =>   
    {
      if (urls.length < 10) {  // Limit to 10 URLs
        setUrls([...urls, ""]);
      }
    };

  const handleUrlChange = (index: number, newUrl: string) => {
    const updatedUrls = urls.map((url, i) => (i === index ? newUrl : url));
    setUrls(updatedUrls);
  };

  const handleRemoveUrl = (index: number) => {
    const updatedUrls = urls.filter((_, i) => i !== index);
    setUrls(updatedUrls);
  };

  return (
    <div className="flex flex-col w-full mx-auto bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
      <div className="flex items-center justify-between p-2 border-b dark:border-gray-700">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
          Create New Request
        </h3>
        <button className="text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600 p-2 rounded-lg">
          <HiX className="w-5 h-5" />
        </button>
      </div>

      <div className="p-6 space-y-6 text-center mx-auto">
        <div className="text-left">
          <h4 className="text-lg font-bold text-gray-900 dark:text-white">
            Add videos or folders
          </h4>
          <p className="text-sm text-gray-900 dark:text-gray-400">
            These videos would be cut, labeled, and made available in your Recharm video library.
          </p>
        </div>

        {urls.map((url, index) => (
          <div key={index} className="flex flex-col mb-4">
            <label className="text-sm font-medium text-gray-900 dark:text-white mb-2 text-left">
              Video/Folder URL {index + 1}
            </label>
            <div className="flex items-center space-x-3">
              <TextInput
                value={url}
                onChange={(e) => handleUrlChange(index, e.target.value)}
                placeholder="http://drive.google.com/some-link"
                className="flex-1"
              />
              {index > 0 && (
                <button
                  onClick={() => handleRemoveUrl(index)}
                  className="text-red-500 hover:text-red-700"
                >
                  <HiTrash  className="h-5 w-5" />
                </button>
              )}
            </div>
          </div>
        ))}

        <Button
          color="light"
          onClick={handleAddUrl}
          className="text-sm font-medium hover:text-purple-800 bg-white hover:bg-gray-50 border border-gray-300"
        >
          <span className="flex items-center">
            <span className="bg-purple-800 rounded-full p-0.5 mr-2">
              <HiPlus className="h-3 w-3 text-white" />
            </span>
            Add URL
          </span>
        </Button>
      </div>

      <div className="flex items-center justify-end p-4 border-t dark:border-gray-700">
        <Button
          color="primary"
          className="text-sm font-medium bg-purple-700 hover:bg-purple-800"
        >
          Create Request
        </Button>
      </div>
    </div>
  );
}
