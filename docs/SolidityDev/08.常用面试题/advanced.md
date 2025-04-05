# Advanced
1. 以太坊预编译合约（precompiles）的地址是什么？
2. 在 Uniswap V2 和 Uniswap V3 中，"流动性"（liquidity）是什么？
3. 如果通过 delegatecall 调用一个合约，而该合约又通过 delegatecall 调用另一个合约，在代理、第一个合约和第二个合约中，msg.sender 分别是谁？
4. uint64 和 uint256 在 calldata 中的 ABI 编码有什么区别？
5. 什么是只读重入（read-only reentrancy）？
6. 从不受信任的智能合约调用中读取（内存）字节数组有哪些安全考虑？
7. 如果部署一个空的 Solidity 合约，区块链上会有什么字节码（如果有的话）？
8. EVM 如何为内存使用定价？
9. 智能合约的元数据部分存储了什么？
10. 从 MEV 角度看，什么是叔块攻击（uncle-block attack）？
11. 如何进行签名可塑性攻击（signature malleability attack）？
12. 在什么情况下，前导零地址可以节省 gas，为什么？
13. payable(msg.sender).call{value: value}("") 和 msg.sender.call{value: value}("") 有什么区别？
14. 一个字符串占用多少个存储槽？
15. Solidity 编译器中的 --via-ir 功能如何工作？
16. 函数修饰符是从右到左调用还是从左到右调用，或者是不确定的？
17. 如果通过 delegatecall 调用一个合约并执行 CODESIZE 操作码，会返回哪个合约的大小？
18. 为什么用 ECDSA 签名一个哈希而不是任意的 bytes32 很重要？
19. 描述符号操作测试（symbolic manipulation testing）是如何工作的。
20. 复制内存区域的最有效方法是什么？
21. 如何在链上验证另一个智能合约发出的事件，而不使用预言机？
22. 调用 selfdestruct 时，以太币何时转移？智能合约的字节码何时被擦除？
23. 在什么条件下，OpenZeppelin 的 Proxy.sol 会覆盖自由内存指针？为什么这样做是安全的？
24. 为什么 Solidity 废弃了 "years" 关键字？
25. verbatim 关键字做什么？它可以在哪里使用？
26. 在调用另一个智能合约时，可以转发多少 gas？
27. 存储 -1 的 int256 变量在十六进制中是什么样子？
28. signextend 操作码有什么用途？
29. 为什么 calldata 中的负数会消耗更多 gas？
30. 什么是零知识友好的哈希函数（zk-friendly hash function），它与非零知识友好的哈希函数有何不同？
31. 元代理（metaproxy）做什么？
32. 在零知识中，什么是空值器（nullifier），它有什么用途？
33. 什么是 SECP256K1？
34. 为什么不应该从 Uniswap V3 的 slot0 获取价格？
35. 描述如何在 Solidity 中计算一个数的九次方根。
36. 在带有修饰符的 Solidity 函数中使用汇编中的 return 有什么危险？
37. 不使用 % 运算符，如何判断一个数是奇数还是偶数？
38. 在构造函数中调用 codesize() 返回什么？在构造函数外调用呢？
翻译时结合了现代区块链技术的语境，例如 DeFi、Layer 2（如 Polygon、Optimism）、EIP 标准（如 EIP-1559、EIP1967）、以及常见的智能合约开发实践（如 OpenZeppelin 的实现）。专有名词如 delegatecall、selfdestruct、calldata 等保留英文以保持技术准确性，同时在必要处添加中文解释以增强可读性。