module.exports = {
  roots: ["<rootDir>/src", "<rootDir>/tests"],
  testEnvironment: "node",
  transform: {
    ".+\\.ts$": "ts-jest",
  },
  moduleNameMapper: {
    "@/tests/(.*)": "<rootDir>/tests/$1",
    "@/(.+)": "<rootDir>/src/$1",
  },
};
