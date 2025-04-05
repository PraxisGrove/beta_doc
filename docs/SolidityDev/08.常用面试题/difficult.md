# Difficult
1. 固定点运算如何表示数字，在区块链中有何应用？
2. 什么是 ERC20 批准抢跑攻击（approval frontrunning attack）？
3. 哪个操作码实现了 address(this).balance？
4. Solidity 事件最多可以有多少个参数？
5. 什么是匿名 Solidity 事件？
6. 在什么情况下函数可以接收映射（mapping）作为参数？
7. 在 ERC4626 中，什么是膨胀攻击（inflation attack）？
8. uint64[] x = [1,2,3,4,5] 使用了多少个存储槽？它与内存中的情况有何不同？
9. 在上海升级之前，在什么情况下 returndatasize() 比 PUSH 0 更高效？
10. 为什么编译器会在 Solidity 合约中插入 INVALID 操作码？
11. 自定义错误（custom error）和带有错误字符串的 require 在 EVM 层面的编码有什么区别？
12. 在 Compound DeFi 公式中，kink 参数是什么？
13. 函数的名称如何影响其 gas 成本（如果有影响的话）？
14. 使用 ecrecover 的常见漏洞是什么？
15. 乐观卷叠（optimistic rollup）和零知识卷叠（zk-rollup）有什么区别？
16. EIP1967 如何选择存储槽，有多少个存储槽，它们代表什么？
17. 1 Sazbo 的以太币是多少？
18. 除了在代理中使用，delegatecall 还能用于区块链中的哪些场景？
19. 在什么情况下，一个在以太坊上运行的智能合约无法在 Polygon 或 Optimism 上运行？（假设没有外部合约依赖）
20. 智能合约如何在不更改地址的情况下更改其字节码？
21. 将 msg.value 放在循环中有什么危险？
22. 描述一个接受动态长度 uint128 数组的函数的 calldata，当传入 uint128[1,2,3,4] 时是什么样子？
23. 为什么严格不等式比较（strict inequality）比 ≤ 或 ≥ 更节省 gas？增加了哪些额外操作码？
24. 如果一个代理调用一个实现，而该实现调用的函数中执行了自毁，会发生什么？
25. 变量作用域与堆栈深度在 EVM 中有什么关系？
26. 什么是访问列表交易（access list transaction），在以太坊中有何作用？
27. 如何使用 mload 操作码暂停执行？
28. 在代理中，信标（beacon）是什么？
29. 为什么在进行治理投票前需要对余额进行快照？
30. 如何在用户不支付 gas 的情况下执行交易？
31. 在 Solidity 中，不使用汇编，如何获取 calldata 的函数选择器？
32. 以太坊地址是如何派生的？
33. 什么是元代理（metaproxy）标准？
34. 如果 try catch 调用一个不会回退的合约，但在 try 块内发生回退，会怎样？
35. 如果用户调用一个代理，代理通过 delegatecall 调用 A，A 通过普通调用调用 B，从 A 的角度看 msg.sender 是谁？从 B 的角度看呢？从代理的角度看呢？
36. 在什么情况下，前导零地址（vanity addresses）可以节省 gas？
37. 为什么许多合约字节码以 6080604052 开头？这个字节码序列做什么？
38. Uniswap V3 如何确定流动性区间的边界？
39. 无风险利率（risk-free rate）在区块链金融中是什么？
40. 当一个合约通过 call、delegatecall 或 staticcall 调用另一个合约时，信息是如何在它们之间传递的？
41. bytes 和 bytes1[] 有什么区别？
42. 如果 LTV 为 75%，在借贷-交换-供应-抵押循环中可以实现的最大杠杆是多少？其他 LTV 限制呢？
43. Curve StableSwap 如何实现集中流动性？
44. Tether 稳定币合约有哪些怪癖？
45. 存储 100 万、10 亿、1 万亿、1 千万亿的最小 uint 是多少？
46. 未初始化的 UUPS 逻辑合约有什么危险？
47. 在 Solidity 中除以零和在 Yul 中除以零，合约返回的值有什么区别（如果有的话）？
48. 为什么不能使用 .push() 向内存中的数组追加元素？