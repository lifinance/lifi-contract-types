import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { LiFiVaultWrapper, LiFiVaultWrapperInterface } from "../LiFiVaultWrapper";
type LiFiVaultWrapperConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class LiFiVaultWrapper__factory extends ContractFactory {
    constructor(...args: LiFiVaultWrapperConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<LiFiVaultWrapper>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): LiFiVaultWrapper;
    connect(signer: Signer): LiFiVaultWrapper__factory;
    static readonly bytecode = "0x608060405234801561000f575f5ffd5b5060017f9b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f005561003c610041565b6100f3565b7ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a00805468010000000000000000900460ff16156100915760405163f92ee8a960e01b815260040160405180910390fd5b80546001600160401b03908116146100f05780546001600160401b0319166001600160401b0390811782556040519081527fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d29060200160405180910390a15b50565b612f51806101005f395ff3fe608060405234801561000f575f5ffd5b5060043610610235575f3560e01c80636f307dc31161013d578063c45a0155116100b8578063d3441de511610088578063dd62ed3e1161006e578063dd62ed3e146105a5578063ef8b30f714610609578063f90b13d41461061c575f5ffd5b8063d3441de51461057f578063d905777e14610592575f5ffd5b8063c45a015514610539578063c63d75b6146103c5578063c6e6f59214610559578063ce96cb771461056c575f5ffd5b806395d89b411161010d578063b3d7f6b9116100f3578063b3d7f6b914610500578063b460af9414610513578063ba08765214610526575f5ffd5b806395d89b41146104e5578063a9059cbb146104ed575f5ffd5b80636f307dc31461045757806370a08231146104765780638eb36e3d146104ca57806394bf804d146104d2575f5ffd5b806318160ddd116101cd57806338d52e0f1161019d5780634cdad506116101835780634cdad506146103f85780636e553f651461040b5780636ec520d41461041e575f5ffd5b806338d52e0f14610388578063402d267d146103c5575f5ffd5b806318160ddd1461031457806323b872dd1461033b57806330521c5b1461034e578063313ce5671461036e575f5ffd5b8063095ea7b311610208578063095ea7b3146102c15780630a28a477146102e45780630f2da776146102f7578063158ef93e1461030c575f5ffd5b806301e1d1141461023957806303eadcfc1461025457806306fdde031461029957806307a2d13a146102ae575b5f5ffd5b61024161062f565b6040519081526020015b60405180910390f35b6001546102749073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200161024b565b6102a16106cf565b60405161024b91906125d1565b6102416102bc3660046125e3565b6107a2565b6102d46102cf36600461261b565b6107b3565b604051901515815260200161024b565b6102416102f23660046125e3565b6107ca565b61030a610305366004612654565b6107dd565b005b6102d4610d4f565b7f52c63247e1f47db19d5ce0460030c497f067ca4cebf71ba98eeadabe20bace0254610241565b6102d461034936600461275f565b610d69565b6002546102749073ffffffffffffffffffffffffffffffffffffffff1681565b610376610d8e565b60405160ff909116815260200161024b565b7f0773e532dfede91f04b12a73d3d2acd361424f41f76b4fb79f090161e36b4e005473ffffffffffffffffffffffffffffffffffffffff16610274565b6102416103d336600461279d565b507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff90565b6102416104063660046125e3565b610de1565b6102416104193660046127b8565b610df8565b6003546104449074010000000000000000000000000000000000000000900461ffff1681565b60405161ffff909116815260200161024b565b5f546102749073ffffffffffffffffffffffffffffffffffffffff1681565b61024161048436600461279d565b73ffffffffffffffffffffffffffffffffffffffff165f9081527f52c63247e1f47db19d5ce0460030c497f067ca4cebf71ba98eeadabe20bace00602052604090205490565b6102a1610e36565b6102416104e03660046127b8565b610ec2565b6102a1610ed5565b6102d46104fb36600461261b565b610f26565b61024161050e3660046125e3565b610f33565b6102416105213660046127e6565b610f4a565b6102416105343660046127e6565b610f89565b6003546102749073ffffffffffffffffffffffffffffffffffffffff1681565b6102416105673660046125e3565b610f9d565b61024161057a36600461279d565b610fa8565b6102d461058d366004612825565b610fb5565b6102416105a036600461279d565b61102b565b6102416105b3366004612845565b73ffffffffffffffffffffffffffffffffffffffff9182165f9081527f52c63247e1f47db19d5ce0460030c497f067ca4cebf71ba98eeadabe20bace016020908152604080832093909416825291909152205490565b6102416106173660046125e3565b611074565b61044461062a366004612825565b611082565b6001545f80546040517f18300a2400000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff9182166004820152306024820152919216906318300a2490604401602060405180830381865afa1580156106a6573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906106ca9190612871565b905090565b7f52c63247e1f47db19d5ce0460030c497f067ca4cebf71ba98eeadabe20bace0380546060917f52c63247e1f47db19d5ce0460030c497f067ca4cebf71ba98eeadabe20bace009161072090612888565b80601f016020809104026020016040519081016040528092919081815260200182805461074c90612888565b80156107975780601f1061076e57610100808354040283529160200191610797565b820191905f5260205f20905b81548152906001019060200180831161077a57829003601f168201915b505050505091505090565b5f6107ad825f6110fd565b92915050565b5f336107c0818585611154565b5060019392505050565b5f6107ad6107d88284612906565b611166565b5f6107e6611172565b805490915060ff68010000000000000000820416159067ffffffffffffffff165f811580156108125750825b90505f8267ffffffffffffffff16600114801561082e5750303b155b90508115801561083c575080155b15610873576040517ff92ee8a900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b84547fffffffffffffffffffffffffffffffffffffffffffffffff000000000000000016600117855583156108d45784547fffffffffffffffffffffffffffffffffffffffffffffff00ffffffffffffffff16680100000000000000001785555b73ffffffffffffffffffffffffffffffffffffffff8d16158061090b575073ffffffffffffffffffffffffffffffffffffffff8c16155b8061092a575073ffffffffffffffffffffffffffffffffffffffff8b16155b80610949575073ffffffffffffffffffffffffffffffffffffffff8a16155b15610980576040517fd92e233d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6127108961ffff1611156109cb576040517f65982aeb00000000000000000000000000000000000000000000000000000000815261ffff8a1660048201526024015b60405180910390fd5b6040517fae1c160c00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8d811660048301525f91908d169063ae1c160c90602401602060405180830381865afa158015610a38573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610a5c9190612919565b90508d73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610ae9578d816040517f4e83a9b90000000000000000000000000000000000000000000000000000000081526004016109c292919073ffffffffffffffffffffffffffffffffffffffff92831681529116602082015260400190565b50610af38d61119a565b3360035f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508b5f5f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508a60015f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508960025f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555088600360146101000a81548161ffff021916908361ffff1602179055508760058181610c1e9190612961565b5060049050610c2e878983612a42565b508a73ffffffffffffffffffffffffffffffffffffffff168c73ffffffffffffffffffffffffffffffffffffffff168e73ffffffffffffffffffffffffffffffffffffffff167f3c0b5f0f64e985a53a85dbc32c6b46eb0befe5bada9598711447f51a4bb1cb2f8d338e604051610cd79392919073ffffffffffffffffffffffffffffffffffffffff938416815291909216602082015261ffff91909116604082015260600190565b60405180910390a48315610d405784547fffffffffffffffffffffffffffffffffffffffffffffff00ffffffffffffffff168555604051600181527fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d29060200160405180910390a15b50505050505050505050505050565b5f610d5861124f565b67ffffffffffffffff161515919050565b5f33610d76858285611268565b610d81858585611355565b60019150505b9392505050565b5f807f0773e532dfede91f04b12a73d3d2acd361424f41f76b4fb79f090161e36b4e0090505f8154610ddb919074010000000000000000000000000000000000000000900460ff16612b58565b91505090565b5f5f610dec836107a2565b9050610d875f82612b71565b5f610e016113fe565b610e0b838361142e565b90506107ad60017f9b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f0055565b60048054610e4390612888565b80601f0160208091040260200160405190810160405280929190818152602001828054610e6f90612888565b8015610eba5780601f10610e9157610100808354040283529160200191610eba565b820191905f5260205f20905b815481529060010190602001808311610e9d57829003601f168201915b505050505081565b5f610ecb6113fe565b610e0b8383611470565b7f52c63247e1f47db19d5ce0460030c497f067ca4cebf71ba98eeadabe20bace0480546060917f52c63247e1f47db19d5ce0460030c497f067ca4cebf71ba98eeadabe20bace009161072090612888565b5f336107c0818585611355565b5f5f610f3e836114aa565b9050610d875f82612906565b5f610f536113fe565b610f5e8484846114b6565b9050610d8760017f9b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f0055565b5f610f926113fe565b610f5e848484611545565b5f6107ad825f6115cb565b5f6107ad6104068361102b565b5f60038260ff161115610ff9576040517f8f3eadca00000000000000000000000000000000000000000000000000000000815260ff831660048201526024016109c2565b600660ff83166004811061100f5761100f612b84565b602081049091015460ff601f9092166101000a90041692915050565b73ffffffffffffffffffffffffffffffffffffffff81165f9081527f52c63247e1f47db19d5ce0460030c497f067ca4cebf71ba98eeadabe20bace0060205260408120546107ad565b5f6107ad6105678284612b71565b5f60038260ff1611156110c6576040517f8f3eadca00000000000000000000000000000000000000000000000000000000815260ff831660048201526024016109c2565b600560ff8316600481106110dc576110dc612b84565b601091828204019190066002029054906101000a900461ffff169050919050565b5f610d8761110961062f565b611114906001612906565b61111f5f600a612cd2565b7f52c63247e1f47db19d5ce0460030c497f067ca4cebf71ba98eeadabe20bace025461114b9190612906565b85919085611619565b611161838383600161165b565b505050565b5f6107ad8260016115cb565b5f807ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a006107ad565b5f6111ba8273ffffffffffffffffffffffffffffffffffffffff166117c5565b905080515f036111fa575060408051808201909152600281527f565700000000000000000000000000000000000000000000000000000000000060208201525b6112428160405160200161120e9190612cf7565b6040516020818303038152906040528260405160200161122e9190612d28565b6040516020818303038152906040526117eb565b61124b826117fd565b5050565b5f611258611172565b5467ffffffffffffffff16919050565b73ffffffffffffffffffffffffffffffffffffffff8381165f9081527f52c63247e1f47db19d5ce0460030c497f067ca4cebf71ba98eeadabe20bace0160209081526040808320938616835292905220547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81101561134f5781811015611341576040517ffb8f41b200000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8416600482015260248101829052604481018390526064016109c2565b61134f84848484035f61165b565b50505050565b73ffffffffffffffffffffffffffffffffffffffff83166113a4576040517f96c6fd1e0000000000000000000000000000000000000000000000000000000081525f60048201526024016109c2565b73ffffffffffffffffffffffffffffffffffffffff82166113f3576040517fec442f050000000000000000000000000000000000000000000000000000000081525f60048201526024016109c2565b611161838383611811565b6114066119de565b60027f9b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f0055565b565b5f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5f61145a85611074565b905061146833858784611a39565b949350505050565b5f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5f61149c85610f33565b905061146833858388611a39565b5f6107ad8260016110fd565b5f5f6114c183610fa8565b905080851115611523576040517ffe9cceec00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8416600482015260248101869052604481018290526064016109c2565b5f61152d866107ca565b905061153c3386868985611b55565b95945050505050565b5f5f6115508361102b565b9050808511156115b2576040517fb94abeec00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8416600482015260248101869052604481018290526064016109c2565b5f6115bc86610de1565b905061153c338686848a611b55565b5f610d876115da82600a612cd2565b7f52c63247e1f47db19d5ce0460030c497f067ca4cebf71ba98eeadabe20bace02546116069190612906565b61160e61062f565b61114b906001612906565b5f61164661162683611d84565b801561164157505f848061163c5761163c612d59565b868809115b151590565b611651868686611db0565b61153c9190612906565b7f52c63247e1f47db19d5ce0460030c497f067ca4cebf71ba98eeadabe20bace0073ffffffffffffffffffffffffffffffffffffffff85166116cb576040517fe602df050000000000000000000000000000000000000000000000000000000081525f60048201526024016109c2565b73ffffffffffffffffffffffffffffffffffffffff841661171a576040517f94280d620000000000000000000000000000000000000000000000000000000081525f60048201526024016109c2565b73ffffffffffffffffffffffffffffffffffffffff8086165f908152600183016020908152604080832093881683529290522083905581156117be578373ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925856040516117b591815260200190565b60405180910390a35b5050505050565b60606107ad826117df6395d89b4160049081525f90815290565b6103e8620186a0611e60565b6117f3611f07565b61124b8282611f45565b611805611f07565b61180e81611fa8565b50565b7f52c63247e1f47db19d5ce0460030c497f067ca4cebf71ba98eeadabe20bace0073ffffffffffffffffffffffffffffffffffffffff841661186b5781816002015f8282546118609190612906565b9091555061191b9050565b73ffffffffffffffffffffffffffffffffffffffff84165f90815260208290526040902054828110156118f0576040517fe450d38c00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8616600482015260248101829052604481018490526064016109c2565b73ffffffffffffffffffffffffffffffffffffffff85165f9081526020839052604090209083900390555b73ffffffffffffffffffffffffffffffffffffffff8316611946576002810180548390039055611971565b73ffffffffffffffffffffffffffffffffffffffff83165f9081526020829052604090208054830190555b8273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516119d091815260200190565b60405180910390a350505050565b7f9b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f005460020361142c576040517f3ee5aeb500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b611a4584848484612079565b5f6117be611a877f0773e532dfede91f04b12a73d3d2acd361424f41f76b4fb79f090161e36b4e005473ffffffffffffffffffffffffffffffffffffffff1690565b5f5473ffffffffffffffffffffffffffffffffffffffff16611aa98487612b71565b60405173ffffffffffffffffffffffffffffffffffffffff93841660248201529290911660448301526064820152608401604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f8340f549000000000000000000000000000000000000000000000000000000001790526120f5565b8273ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614611b9357611b93838683611268565b611b9d8382612172565b5f611cad611bdf7f0773e532dfede91f04b12a73d3d2acd361424f41f76b4fb79f090161e36b4e005473ffffffffffffffffffffffffffffffffffffffff1690565b5f5473ffffffffffffffffffffffffffffffffffffffff16611c018487612906565b60405173ffffffffffffffffffffffffffffffffffffffff93841660248201529290911660448301526064820152608401604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fd9caed12000000000000000000000000000000000000000000000000000000001790526120f5565b611cf5611cee7f0773e532dfede91f04b12a73d3d2acd361424f41f76b4fb79f090161e36b4e005473ffffffffffffffffffffffffffffffffffffffff1690565b86856121cc565b8373ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff168773ffffffffffffffffffffffffffffffffffffffff167ffbde797d201c681b91056529119e0b02407c7bb96a4a2c75c01fc9667232c8db8686604051611d74929190918252602082015260400190565b60405180910390a4505050505050565b5f6002826003811115611d9957611d99612d86565b611da39190612db3565b60ff166001149050919050565b5f5f5f611dbd8686612227565b91509150815f03611de157838181611dd757611dd7612d59565b0492505050610d87565b818411611df857611df86003851502601118612262565b5f848688095f868103871696879004966002600389028118808a02820302808a02820302808a02820302808a02820302808a02820302808a02909103029181900381900460010185841190960395909502919093039390930492909217029150509392505050565b606060205f8551602087018886fa15611468576040518060200160403d10611eca575f5160203d038111611ec857602081843e602081013d03835111611ec857825186811181881802188084528060208301843e5f9201918252506020016040529050611468565b505b3d8581118187180218805f833e5f8183015350805b80515f1a15611ef057600101611edf565b90810382525f815260200160405295945050505050565b611f0f612273565b61142c576040517fd7e6bcf800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b611f4d611f07565b7f52c63247e1f47db19d5ce0460030c497f067ca4cebf71ba98eeadabe20bace007f52c63247e1f47db19d5ce0460030c497f067ca4cebf71ba98eeadabe20bace03611f998482612df9565b506004810161134f8382612df9565b611fb0611f07565b7f0773e532dfede91f04b12a73d3d2acd361424f41f76b4fb79f090161e36b4e005f80611fdc84612291565b9150915081611fec576012611fee565b805b83547fffffffffffffffffffffff000000000000000000000000000000000000000000167401000000000000000000000000000000000000000060ff92909216919091027fffffffffffffffffffffffff0000000000000000000000000000000000000000161773ffffffffffffffffffffffffffffffffffffffff94909416939093179091555050565b612083848361234a565b61208d8382612393565b8273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fdcbc1c05240f31ff3ad067ef1ee35ce4997762752e3a095284754544f4c709d784846040516119d0929190918252602082015260400190565b6001546040515f91829173ffffffffffffffffffffffffffffffffffffffff90911690612123908590612f10565b5f60405180830381855af49150503d805f811461215b576040519150601f19603f3d011682016040523d82523d5f602084013e612160565b606091505b50915091508161116157805160208201fd5b73ffffffffffffffffffffffffffffffffffffffff82166121c1576040517f96c6fd1e0000000000000000000000000000000000000000000000000000000081525f60048201526024016109c2565b61124b825f83611811565b6121d983838360016123ed565b611161576040517f5274afe700000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff841660048201526024016109c2565b5f807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff83850993909202808410938190039390930393915050565b634e487b715f52806020526024601cfd5b5f61227c611172565b5468010000000000000000900460ff16919050565b5f5f5f61229d60405190565b6040805160048152602481019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f313ce567000000000000000000000000000000000000000000000000000000001790529091505f908190612306908790612475565b509150915061231483604052565b818015612322575060203d10155b801561232f575060ff8111155b61233a575f5f61233e565b6001815b94509450505050915091565b61124b61238b7f0773e532dfede91f04b12a73d3d2acd361424f41f76b4fb79f090161e36b4e005473ffffffffffffffffffffffffffffffffffffffff1690565b833084612496565b73ffffffffffffffffffffffffffffffffffffffff82166123e2576040517fec442f050000000000000000000000000000000000000000000000000000000081525f60048201526024016109c2565b61124b5f8383611811565b6040517fa9059cbb000000000000000000000000000000000000000000000000000000005f81815273ffffffffffffffffffffffffffffffffffffffff8616600452602485905291602083604481808b5af1925060015f5114831661246957838315161561245d573d5f823e3d81fd5b5f873b113d1516831692505b60405250949350505050565b5f5f5f60405f855160208701885afa92505f51915060205190509250925092565b6124a48484848460016124f2565b61134f576040517f5274afe700000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff851660048201526024016109c2565b6040517f23b872dd000000000000000000000000000000000000000000000000000000005f81815273ffffffffffffffffffffffffffffffffffffffff8781166004528616602452604485905291602083606481808c5af1925060015f51148316612574578383151615612568573d5f823e3d81fd5b5f883b113d1516831692505b604052505f60605295945050505050565b5f81518084528060208401602086015e5f6020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b602081525f610d876020830184612585565b5f602082840312156125f3575f5ffd5b5035919050565b73ffffffffffffffffffffffffffffffffffffffff8116811461180e575f5ffd5b5f5f6040838503121561262c575f5ffd5b8235612637816125fa565b946020939093013593505050565b61ffff8116811461180e575f5ffd5b5f5f5f5f5f5f5f5f888a036101c081121561266d575f5ffd5b8935612678816125fa565b985060208a0135612688816125fa565b975060408a0135612698816125fa565b965060608a01356126a8816125fa565b955060808a01356126b881612645565b94506101007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60820112156126ea575f5ffd5b5060a0890192506101a089013567ffffffffffffffff81111561270b575f5ffd5b89015f80601f83018d1361271d575f5ffd5b50813567ffffffffffffffff811115612734575f5ffd5b6020830191508c602082850101111561274b575f5ffd5b999c989b5096995094979396929594505050565b5f5f5f60608486031215612771575f5ffd5b833561277c816125fa565b9250602084013561278c816125fa565b929592945050506040919091013590565b5f602082840312156127ad575f5ffd5b8135610d87816125fa565b5f5f604083850312156127c9575f5ffd5b8235915060208301356127db816125fa565b809150509250929050565b5f5f5f606084860312156127f8575f5ffd5b83359250602084013561280a816125fa565b9150604084013561281a816125fa565b809150509250925092565b5f60208284031215612835575f5ffd5b813560ff81168114610d87575f5ffd5b5f5f60408385031215612856575f5ffd5b8235612861816125fa565b915060208301356127db816125fa565b5f60208284031215612881575f5ffd5b5051919050565b600181811c9082168061289c57607f821691505b6020821081036128d3577f4e487b71000000000000000000000000000000000000000000000000000000005f52602260045260245ffd5b50919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b808201808211156107ad576107ad6128d9565b5f60208284031215612929575f5ffd5b8151610d87816125fa565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b815f805b60048110156129a4575f833561297a81612645565b6020949094019361ffff600484901b81811b1995909516911690931b929092179150600101612965565b50825550608082015f805b60048110156129f1575f833580151581146129c8575f5ffd5b6020949094019360ff600384901b81811b1995909516911690931b9290921791506001016129af565b5080600184015550505050565b601f82111561116157805f5260205f20601f840160051c81016020851015612a235750805b601f840160051c820191505b818110156117be575f8155600101612a2f565b67ffffffffffffffff831115612a5a57612a5a612934565b612a6e83612a688354612888565b836129fe565b5f601f841160018114612abe575f8515612a885750838201355b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600387901b1c1916600186901b1783556117be565b5f838152602081207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08716915b82811015612b0b5786850135825560209485019460019092019101612aeb565b5086821015612b46577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60f88860031b161c19848701351681555b505060018560011b0183555050505050565b60ff81811683821601908111156107ad576107ad6128d9565b818103818111156107ad576107ad6128d9565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b6001815b6001841115612bec57808504811115612bd057612bd06128d9565b6001841615612bde57908102905b60019390931c928002612bb5565b935093915050565b5f82612c02575060016107ad565b81612c0e57505f6107ad565b8160018114612c245760028114612c2e57612c4a565b60019150506107ad565b60ff841115612c3f57612c3f6128d9565b50506001821b6107ad565b5060208310610133831016604e8410600b8410161715612c6d575081810a6107ad565b612c987fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8484612bb1565b807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04821115612cca57612cca6128d9565b029392505050565b5f610d8760ff841683612bf4565b5f81518060208401855e5f93019283525090919050565b7f4c492e4649204561726e2000000000000000000000000000000000000000000081525f610d87600b830184612ce0565b7f6c6600000000000000000000000000000000000000000000000000000000000081525f610d876002830184612ce0565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601260045260245ffd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602160045260245ffd5b5f60ff831680612dea577f4e487b71000000000000000000000000000000000000000000000000000000005f52601260045260245ffd5b8060ff84160691505092915050565b815167ffffffffffffffff811115612e1357612e13612934565b612e2781612e218454612888565b846129fe565b6020601f821160018114612e78575f8315612e425750848201515b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600385901b1c1916600184901b1784556117be565b5f848152602081207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08516915b82811015612ec55787850151825560209485019460019092019101612ea5565b5084821015612f0157868401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600387901b60f8161c191681555b50505050600190811b01905550565b5f610d878284612ce056fea2646970667358221220ac6c91fca0704dfbec6354095c972a4ac6afcc464931bbec166326f468cd11d164736f6c634300081d0033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "adapter";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "allowance";
        readonly inputs: readonly [{
            readonly name: "owner";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "spender";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "approve";
        readonly inputs: readonly [{
            readonly name: "spender";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "value";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "asset";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "balanceOf";
        readonly inputs: readonly [{
            readonly name: "account";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "convertToAssets";
        readonly inputs: readonly [{
            readonly name: "shares";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "convertToShares";
        readonly inputs: readonly [{
            readonly name: "assets";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "decimals";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint8";
            readonly internalType: "uint8";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "deposit";
        readonly inputs: readonly [{
            readonly name: "assets";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "factory";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "feeEnabled";
        readonly inputs: readonly [{
            readonly name: "_feeType";
            readonly type: "uint8";
            readonly internalType: "uint8";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "feeRate";
        readonly inputs: readonly [{
            readonly name: "_feeType";
            readonly type: "uint8";
            readonly internalType: "uint8";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint16";
            readonly internalType: "uint16";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "initData";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "initialize";
        readonly inputs: readonly [{
            readonly name: "_asset";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_underlying";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_adapter";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_vaultWrapperAdmin";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_integratorShareBps";
            readonly type: "uint16";
            readonly internalType: "uint16";
        }, {
            readonly name: "_fees";
            readonly type: "tuple";
            readonly internalType: "struct FeeConfig";
            readonly components: readonly [{
                readonly name: "rateBps";
                readonly type: "uint16[4]";
                readonly internalType: "uint16[4]";
            }, {
                readonly name: "enabled";
                readonly type: "bool[4]";
                readonly internalType: "bool[4]";
            }];
        }, {
            readonly name: "_initData";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "initialized";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "integratorShareBps";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint16";
            readonly internalType: "uint16";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "maxDeposit";
        readonly inputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "maxMint";
        readonly inputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "maxRedeem";
        readonly inputs: readonly [{
            readonly name: "owner";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "maxWithdraw";
        readonly inputs: readonly [{
            readonly name: "owner";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "mint";
        readonly inputs: readonly [{
            readonly name: "shares";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "name";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "previewDeposit";
        readonly inputs: readonly [{
            readonly name: "assets";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "previewMint";
        readonly inputs: readonly [{
            readonly name: "shares";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "previewRedeem";
        readonly inputs: readonly [{
            readonly name: "shares";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "previewWithdraw";
        readonly inputs: readonly [{
            readonly name: "assets";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "redeem";
        readonly inputs: readonly [{
            readonly name: "shares";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "owner";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "symbol";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "totalAssets";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "totalSupply";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "transfer";
        readonly inputs: readonly [{
            readonly name: "to";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "value";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "transferFrom";
        readonly inputs: readonly [{
            readonly name: "from";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "to";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "value";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "underlying";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "vaultWrapperAdmin";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "withdraw";
        readonly inputs: readonly [{
            readonly name: "assets";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "owner";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "event";
        readonly name: "Approval";
        readonly inputs: readonly [{
            readonly name: "owner";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "spender";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "value";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "Deposit";
        readonly inputs: readonly [{
            readonly name: "sender";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "owner";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "assets";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "shares";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "Initialized";
        readonly inputs: readonly [{
            readonly name: "asset";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "underlying";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "adapter";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "vaultWrapperAdmin";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "factory";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "integratorShareBps";
            readonly type: "uint16";
            readonly indexed: false;
            readonly internalType: "uint16";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "Initialized";
        readonly inputs: readonly [{
            readonly name: "version";
            readonly type: "uint64";
            readonly indexed: false;
            readonly internalType: "uint64";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "Transfer";
        readonly inputs: readonly [{
            readonly name: "from";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "to";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "value";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "Withdraw";
        readonly inputs: readonly [{
            readonly name: "sender";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "owner";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "assets";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "shares";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "error";
        readonly name: "AssetMismatch";
        readonly inputs: readonly [{
            readonly name: "expected";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "actual";
            readonly type: "address";
            readonly internalType: "address";
        }];
    }, {
        readonly type: "error";
        readonly name: "ERC20InsufficientAllowance";
        readonly inputs: readonly [{
            readonly name: "spender";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "allowance";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "needed";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
    }, {
        readonly type: "error";
        readonly name: "ERC20InsufficientBalance";
        readonly inputs: readonly [{
            readonly name: "sender";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "balance";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "needed";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
    }, {
        readonly type: "error";
        readonly name: "ERC20InvalidApprover";
        readonly inputs: readonly [{
            readonly name: "approver";
            readonly type: "address";
            readonly internalType: "address";
        }];
    }, {
        readonly type: "error";
        readonly name: "ERC20InvalidReceiver";
        readonly inputs: readonly [{
            readonly name: "receiver";
            readonly type: "address";
            readonly internalType: "address";
        }];
    }, {
        readonly type: "error";
        readonly name: "ERC20InvalidSender";
        readonly inputs: readonly [{
            readonly name: "sender";
            readonly type: "address";
            readonly internalType: "address";
        }];
    }, {
        readonly type: "error";
        readonly name: "ERC20InvalidSpender";
        readonly inputs: readonly [{
            readonly name: "spender";
            readonly type: "address";
            readonly internalType: "address";
        }];
    }, {
        readonly type: "error";
        readonly name: "ERC4626ExceededMaxDeposit";
        readonly inputs: readonly [{
            readonly name: "receiver";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "assets";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "max";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
    }, {
        readonly type: "error";
        readonly name: "ERC4626ExceededMaxMint";
        readonly inputs: readonly [{
            readonly name: "receiver";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "shares";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "max";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
    }, {
        readonly type: "error";
        readonly name: "ERC4626ExceededMaxRedeem";
        readonly inputs: readonly [{
            readonly name: "owner";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "shares";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "max";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
    }, {
        readonly type: "error";
        readonly name: "ERC4626ExceededMaxWithdraw";
        readonly inputs: readonly [{
            readonly name: "owner";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "assets";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "max";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
    }, {
        readonly type: "error";
        readonly name: "InvalidFeeType";
        readonly inputs: readonly [{
            readonly name: "feeType";
            readonly type: "uint8";
            readonly internalType: "uint8";
        }];
    }, {
        readonly type: "error";
        readonly name: "InvalidInitialization";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidIntegratorShareBps";
        readonly inputs: readonly [{
            readonly name: "integratorShareBps";
            readonly type: "uint16";
            readonly internalType: "uint16";
        }];
    }, {
        readonly type: "error";
        readonly name: "NotInitializing";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "ReentrancyGuardReentrantCall";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "SafeERC20FailedOperation";
        readonly inputs: readonly [{
            readonly name: "token";
            readonly type: "address";
            readonly internalType: "address";
        }];
    }, {
        readonly type: "error";
        readonly name: "ZeroAddress";
        readonly inputs: readonly [];
    }];
    static createInterface(): LiFiVaultWrapperInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): LiFiVaultWrapper;
}
export {};
