# Medium
1. transfer 和 send 有什么区别？为什么在现代区块链开发中不建议使用它们？
2. 代理合约中的存储冲突（storage collision）是什么？
3. abi.encode 和 abi.encodePacked 有什么区别？
4. uint8、uint32、uint64、uint128、uint256 都是有效的 uint 大小，还有其他的吗？
5. 权益证明（PoS）前后 block.timestamp 有什么变化？
6. 什么是抢跑（frontrunning），在区块链交易中如何发生？
7. 什么是提交-揭示方案（commit-reveal scheme），在区块链场景中什么时候会使用它？
8. 在什么情况下 abi.encodePacked 会造成漏洞？
9. 以太坊如何在 EIP-1559 中确定 BASEFEE？
10. 冷读（cold read）和热读（warm read）有什么区别？
11. 自动化做市商（AMM）如何为资产定价？
12. 代理中的函数选择器冲突（function selector clash）是什么？它是如何发生的？
13. 将函数设为 payable 对 gas 费用有什么影响？
14. 什么是签名重放攻击（signature replay attack），在区块链中如何防范？
15. 如何在智能合约中设计一个石头剪刀布游戏，确保玩家无法作弊？
16. 自由内存指针（free memory pointer）是什么，它存储在哪里？
17. 接口（interface）可以使用哪些函数修饰符？函数参数中的 memory 和 calldata 有什么区别？
18. 描述写入操作的三种存储 gas 成本。
19. 为什么可升级合约不应该使用构造函数（constructor）？
20. UUPS 和透明可升级代理（Transparent Upgradeable Proxy）模式有什么区别？
21. 如果一个合约通过 delegatecall 调用一个空地址或之前已自毁的实现，会发生什么？如果是低级调用而不是 delegatecall 呢？
22. ERC777 代币有什么危险？
23. 根据 Solidity 风格指南，函数应该如何排序？
24. 根据 Solidity 风格指南，函数修饰符应该如何排序？
25. 什么是绑定曲线（bonding curve），在代币经济中有何作用？
26. 在 OpenZeppelin 的 ERC721 实现中，_safeMint 和 _mint 有什么区别？Solidity 提供了哪些关键字来测量时间？
27. 什么是三明治攻击（sandwich attack）？
28. 如果通过 delegatecall 调用一个会回退（revert）的函数，delegatecall 会做什么？
29. 乘除以 2 的幂有什么 gas 高效的替代方法？
30. 一个存储槽中可以将多大的 uint 与地址打包在一起？
31. 哪些操作会部分退还 gas？ERC165 在区块链标准中有何用途？
32. 如果一个代理通过 delegatecall 调用合约 A，而 A 执行 address(this).balance，返回的是代理的余额还是 A 的余额？
33. 滑点参数（slippage parameter）在去中心化交易中有何用途？
34. ERC721A 如何降低铸造成本？有什么权衡？
35. 为什么 Solidity 不支持浮点运算？
36. 什么是 TWAP（时间加权平均价格），在 DeFi 中如何使用？
37. Compound Finance 如何计算利用率（utilization）？
38. 如果通过 delegatecall 调用一个读取不可变变量的函数，返回值会是什么？
39. 什么是转账时扣费代币（fee-on-transfer token）？
40. 什么是重新基准代币（rebasing token）？
41. 用 uint32 存储的时间戳会在哪一年溢出？
42. 在 DeFi 中，LTV（贷款价值比）是什么？
43. 在 Compound Finance 和 AAVE 中，aTokens 和 cTokens 是什么？
44. 描述如何使用借贷协议对资产进行杠杆多头或杠杆空头操作。
45. 什么是永续协议（perpetual protocol），在区块链衍生品中有何应用？