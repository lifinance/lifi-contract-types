import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { MayanFacet, MayanFacetInterface } from "../MayanFacet";
declare type MayanFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class MayanFacet__factory extends ContractFactory {
    constructor(...args: MayanFacetConstructorParams);
    deploy(_mayan: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<MayanFacet>;
    getDeployTransaction(_mayan: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): MayanFacet;
    connect(signer: Signer): MayanFacet__factory;
    static readonly bytecode = "0x60a06040523480156200001157600080fd5b5060405162002bee38038062002bee833981016040819052620000349162000046565b6001600160a01b031660805262000078565b6000602082840312156200005957600080fd5b81516001600160a01b03811681146200007157600080fd5b9392505050565b608051612b46620000a8600039600081816073015281816107be0152818161080801526108c10152612b466000f3fe6080604052600436106100345760003560e01c806330c4895214610039578063b621b0321461004e578063bc98b5dc14610061575b600080fd5b61004c6100473660046124b8565b6100be565b005b61004c61005c366004612577565b6102f0565b34801561006d57600080fd5b506100957f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610139576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815533600061014a344761260a565b905086806101000151610189576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b87806101200151156101c7576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b886101ea8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b15610221576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c0015160000361025f576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e001510361029c576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6102b18a600001518b60c001518b8b33610514565b60c08b01526102c08a8861065c565b5047915050818111156102e2576102e26000846102dd858561260a565b610a19565b505060009091555050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0161036b576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815533600061037c344761260a565b9050846103a18160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156103d8576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c00151600003610416576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610453576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8580610100015115610491576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b86806101200151156104cf576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6104e188608001518960c00151610a4f565b6104eb888861065c565b504791505081811115610508576105086000846102dd858561260a565b50506000909155505050565b600082808203610550576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000858561055f60018561260a565b81811061056e5761056e61261d565b9050602002810190610580919061264c565b61059190608081019060600161268a565b9050600061059e82610bc5565b905073ffffffffffffffffffffffffffffffffffffffff82166105c8576105c5348261260a565b90505b60006105d48888610c7e565b90506105e08888610d8a565b6105ed8a89898985610df7565b6000826105f985610bc5565b610603919061260a565b90508981101561064e576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b9052602481018290526044015b60405180910390fd5b9a9950505050505050505050565b7311f111f111f111f111f111f111f111f111f111f173ffffffffffffffffffffffffffffffffffffffff168260a0015173ffffffffffffffffffffffffffffffffffffffff16036107695780356106df576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000806106ef60408401846126a5565b8080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525050505060e48101519250905082358214610766576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50505b6040805160a081018252600080825260208201819052918101829052606081018290526080810191909152608083015173ffffffffffffffffffffffffffffffffffffffff16156108a5576107e783608001517f00000000000000000000000000000000000000000000000000000000000000008560c001516111a9565b608083015160c084015173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000169163e4269fc49184610840604088016020890161268a565b61084d60408901896126a5565b6040518763ffffffff1660e01b815260040161086e9695949392919061275a565b600060405180830381600087803b15801561088857600080fd5b505af115801561089c573d6000803e3d6000fd5b50505050610956565b60c083015173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000169063b0f584ff906108f8604086016020870161268a565b61090560408701876126a5565b6040518563ffffffff1660e01b8152600401610923939291906127db565b6000604051808303818588803b15801561093c57600080fd5b505af1158015610950573d6000803e3d6000fd5b50505050505b7311f111f111f111f111f111f111f111f111f111f173ffffffffffffffffffffffffffffffffffffffff168360a0015173ffffffffffffffffffffffffffffffffffffffff16036109dd5760e08301518351604051843581527f7be3e48a8a8b4d32138937e1809ac83481fffe48e49bb60e43ed1d3d50349e4c9060200160405180910390a35b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f183604051610a0c9190612882565b60405180910390a1505050565b73ffffffffffffffffffffffffffffffffffffffff831615610a4557610a408383836112ec565b505050565b610a40828261146e565b80600003610a89576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610ae25780341015610ade576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa158015610b4f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b739190612995565b905081811015610bb9576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810183905260248101829052604401610645565b610a4083333085611598565b600073ffffffffffffffffffffffffffffffffffffffff821615610c76576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa158015610c4d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c719190612995565b610c78565b475b92915050565b60608160008167ffffffffffffffff811115610c9c57610c9c612232565b604051908082528060200260200182016040528015610cc5578160200160208202803683370190505b5090506000805b83811015610d7f57868682818110610ce657610ce661261d565b9050602002810190610cf8919061264c565b610d0990608081019060600161268a565b9150610d1482610bc5565b838281518110610d2657610d2661261d565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610d775734838281518110610d5f57610d5f61261d565b60200260200101818151610d73919061260a565b9052505b600101610ccc565b509095945050505050565b60005b81811015610a405736838383818110610da857610da861261d565b9050602002810190610dba919061264c565b9050610dcc60e0820160c083016129ae565b15610dee57610dee610de4606083016040840161268a565b8260800135610a4f565b50600101610d8d565b8383838382600181146110c45760008585610e1360018561260a565b818110610e2257610e2261261d565b9050602002810190610e34919061264c565b610e4590608081019060600161268a565b9050600089815b81811015610ff057368d8d83818110610e6757610e6761261d565b9050602002810190610e79919061264c565b9050610ea8610e8e606083016040840161268a565b73ffffffffffffffffffffffffffffffffffffffff161590565b80610f0b5750610f0b610ec1604083016020840161268a565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b8015610f225750610f22610ec1602083018361268a565b8015610fa75750610fa7610f3960a08301836126a5565b610f48916004916000916129cb565b610f51916129f5565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b610fdd576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610fe78f826117b2565b50600101610e4c565b505060005b61100060018561260a565b8110156110bc57600088888381811061101b5761101b61261d565b905060200281019061102d919061264c565b61103e90608081019060600161268a565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146110b3578582815181106110855761108561261d565b602002602001015161109682610bc5565b6110a0919061260a565b925082156110b3576110b3818885610a19565b50600101610ff5565b50505061119d565b8760005b8181101561119a57368b8b838181106110e3576110e361261d565b90506020028101906110f5919061264c565b905061110a610e8e606083016040840161268a565b806111235750611123610ec1604083016020840161268a565b801561113a575061113a610ec1602083018361268a565b80156111515750611151610f3960a08301836126a5565b611187576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6111918d826117b2565b506001016110c8565b50505b50505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff83166111c957505050565b73ffffffffffffffffffffffffffffffffffffffff8216611216576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015282919085169063dd62ed3e90604401602060405180830381865afa15801561128b573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112af9190612995565b1015610a40576112c183836000611ac8565b610a4083837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611ac8565b73ffffffffffffffffffffffffffffffffffffffff8316611339576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216611386576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa1580156113f3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114179190612995565b90508082111561145d576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810183905260248101829052604401610645565b611468848484611cc8565b50505050565b73ffffffffffffffffffffffffffffffffffffffff82166114bb576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b478111156114fe576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101829052476024820152604401610645565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d8060008114611558576040519150601f19603f3d011682016040523d82523d6000602084013e61155d565b606091505b5050905080610a40576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff84166115e5576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216611632576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa1580156116a3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116c79190612995565b90506116d582868686611d1e565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa158015611745573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117699190612995565b611773919061260a565b146117aa576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b6117c86117c2602083018361268a565b3b151590565b6117fe576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6080810135600081900361183e576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000611853610e8e606085016040860161268a565b61185e576000611864565b82608001355b9050600061188061187b606086016040870161268a565b610bc5565b9050600061189761187b608087016060880161268a565b9050826000036118ce576118ce6118b4606087016040880161268a565b6118c4604088016020890161268a565b87608001356111a9565b8460800135821015611919576040517fcf4791810000000000000000000000000000000000000000000000000000000081526080860135600482015260248101839052604401610645565b600080611929602088018861268a565b73ffffffffffffffffffffffffffffffffffffffff168561194d60a08a018a6126a5565b60405161195b929190612a3d565b60006040518083038185875af1925050503d8060008114611998576040519150601f19603f3d011682016040523d82523d6000602084013e61199d565b606091505b5091509150816119e85760006119b282611d7c565b9050806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106459190612a4d565b60006119fd61187b60808a0160608b0161268a565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b3889611a2e60208b018b61268a565b611a3e60608c0160408d0161268a565b611a4e60808d0160608e0161268a565b8c60800135898711611a605786611a6a565b611a6a8a8861260a565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b801580611b6857506040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015284169063dd62ed3e90604401602060405180830381865afa158015611b42573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611b669190612995565b155b611bf4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527f20746f206e6f6e2d7a65726f20616c6c6f77616e6365000000000000000000006064820152608401610645565b60405173ffffffffffffffffffffffffffffffffffffffff8316602482015260448101829052610a409084907f095ea7b300000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611dfa565b60405173ffffffffffffffffffffffffffffffffffffffff8316602482015260448101829052610a409084907fa9059cbb0000000000000000000000000000000000000000000000000000000090606401611c46565b60405173ffffffffffffffffffffffffffffffffffffffff808516602483015283166044820152606481018290526114689085907f23b872dd0000000000000000000000000000000000000000000000000000000090608401611c46565b6060604482511015611dc157505060408051808201909152601d81527f5472616e73616374696f6e2072657665727465642073696c656e746c79000000602082015290565b6000611ddd6004808551611dd5919061260a565b859190611f09565b905080806020019051810190611df39190612a60565b9392505050565b6000611e5c826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff166120239092919063ffffffff16565b9050805160001480611e7d575080806020019051810190611e7d9190612ace565b610a40576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610645565b606081611f1781601f612aeb565b1015611f4f576040517f47aaf07a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b611f598284612aeb565b84511015611f93576040517f3b99b53d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b606082158015611fb2576040519150600082526020820160405261201a565b6040519150601f8416801560200281840101858101878315602002848b0101015b81831015611feb578051835260209283019201611fd3565b5050858452601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016604052505b50949350505050565b6060612032848460008561203a565b949350505050565b6060824710156120cc576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610645565b6000808673ffffffffffffffffffffffffffffffffffffffff1685876040516120f59190612afe565b60006040518083038185875af1925050503d8060008114612132576040519150601f19603f3d011682016040523d82523d6000602084013e612137565b606091505b509150915061214887838387612153565b979650505050505050565b606083156121e95782516000036121e25773ffffffffffffffffffffffffffffffffffffffff85163b6121e2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610645565b5081612032565b61203283838151156121fe5781518083602001fd5b806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106459190612a4d565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff8111828210171561228557612285612232565b60405290565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff811182821017156122d2576122d2612232565b604052919050565b600067ffffffffffffffff8211156122f4576122f4612232565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b600082601f83011261233157600080fd5b813561234461233f826122da565b61228b565b81815284602083860101111561235957600080fd5b816020850160208301376000918101602001919091529392505050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461239a57600080fd5b919050565b80151581146123ad57600080fd5b50565b803561239a8161239f565b600061014082840312156123ce57600080fd5b6123d6612261565b905081358152602082013567ffffffffffffffff808211156123f757600080fd5b61240385838601612320565b6020840152604084013591508082111561241c57600080fd5b5061242984828501612320565b60408301525061243b60608301612376565b606082015261244c60808301612376565b608082015261245d60a08301612376565b60a082015260c082013560c082015260e082013560e08201526101006124848184016123b0565b908201526101206124968382016123b0565b9082015292915050565b6000606082840312156124b257600080fd5b50919050565b600080600080606085870312156124ce57600080fd5b843567ffffffffffffffff808211156124e657600080fd5b6124f2888389016123bb565b9550602087013591508082111561250857600080fd5b818701915087601f83011261251c57600080fd5b81358181111561252b57600080fd5b8860208260051b850101111561254057600080fd5b60208301955080945050604087013591508082111561255e57600080fd5b5061256b878288016124a0565b91505092959194509250565b6000806040838503121561258a57600080fd5b823567ffffffffffffffff808211156125a257600080fd5b6125ae868387016123bb565b935060208501359150808211156125c457600080fd5b506125d1858286016124a0565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b81810381811115610c7857610c786125db565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2183360301811261268057600080fd5b9190910192915050565b60006020828403121561269c57600080fd5b611df382612376565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe18436030181126126da57600080fd5b83018035915067ffffffffffffffff8211156126f557600080fd5b60200191503681900382131561270a57600080fd5b9250929050565b8183528181602085013750600060208284010152600060207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116840101905092915050565b600061012073ffffffffffffffffffffffffffffffffffffffff808a168452886020850152875160408501526020880151606085015260ff6040890151166080850152606088015160a0850152608088015160c085015280871660e085015250806101008401526127ce8184018587612711565b9998505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8416815260406020820152600061280b604083018486612711565b95945050505050565b60005b8381101561282f578181015183820152602001612817565b50506000910152565b60008151808452612850816020860160208601612814565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b6020815281516020820152600060208301516101408060408501526128ab610160850183612838565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08584030160608601526128e68382612838565b9250506060850151612910608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e08501516101008181870152808701519150506101206129838187018315159052565b90950151151593019290925250919050565b6000602082840312156129a757600080fd5b5051919050565b6000602082840312156129c057600080fd5b8135611df38161239f565b600080858511156129db57600080fd5b838611156129e857600080fd5b5050820193919092039150565b7fffffffff000000000000000000000000000000000000000000000000000000008135818116916004851015612a355780818660040360031b1b83161692505b505092915050565b8183823760009101908152919050565b602081526000611df36020830184612838565b600060208284031215612a7257600080fd5b815167ffffffffffffffff811115612a8957600080fd5b8201601f81018413612a9a57600080fd5b8051612aa861233f826122da565b818152856020838501011115612abd57600080fd5b61280b826020830160208601612814565b600060208284031215612ae057600080fd5b8151611df38161239f565b80820180821115610c7857610c786125db565b6000825161268081846020870161281456fea26469706673582212203bd9f3538ee47ebd227d0d83dd5f02433cdff772e9154a2d5e1060d5f867cd2464736f6c63430008110033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_mayan";
            readonly type: "address";
            readonly internalType: "contract IMayan";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "mayan";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract IMayan";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaMayan";
        readonly inputs: readonly [{
            readonly name: "_bridgeData";
            readonly type: "tuple";
            readonly internalType: "struct ILiFi.BridgeData";
            readonly components: readonly [{
                readonly name: "transactionId";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "bridge";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "integrator";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "referrer";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "sendingAssetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "receiver";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "minAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "destinationChainId";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "hasSourceSwaps";
                readonly type: "bool";
                readonly internalType: "bool";
            }, {
                readonly name: "hasDestinationCall";
                readonly type: "bool";
                readonly internalType: "bool";
            }];
        }, {
            readonly name: "_mayanData";
            readonly type: "tuple";
            readonly internalType: "struct MayanFacet.MayanData";
            readonly components: readonly [{
                readonly name: "nonEVMReceiver";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "mayanProtocol";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "protocolData";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "swapAndStartBridgeTokensViaMayan";
        readonly inputs: readonly [{
            readonly name: "_bridgeData";
            readonly type: "tuple";
            readonly internalType: "struct ILiFi.BridgeData";
            readonly components: readonly [{
                readonly name: "transactionId";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "bridge";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "integrator";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "referrer";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "sendingAssetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "receiver";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "minAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "destinationChainId";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "hasSourceSwaps";
                readonly type: "bool";
                readonly internalType: "bool";
            }, {
                readonly name: "hasDestinationCall";
                readonly type: "bool";
                readonly internalType: "bool";
            }];
        }, {
            readonly name: "_swapData";
            readonly type: "tuple[]";
            readonly internalType: "struct LibSwap.SwapData[]";
            readonly components: readonly [{
                readonly name: "callTo";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "approveTo";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "sendingAssetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "receivingAssetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "fromAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "callData";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "requiresDeposit";
                readonly type: "bool";
                readonly internalType: "bool";
            }];
        }, {
            readonly name: "_mayanData";
            readonly type: "tuple";
            readonly internalType: "struct MayanFacet.MayanData";
            readonly components: readonly [{
                readonly name: "nonEVMReceiver";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "mayanProtocol";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "protocolData";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "event";
        readonly name: "BridgeToNonEVMChain";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "destinationChainId";
            readonly type: "uint256";
            readonly indexed: true;
            readonly internalType: "uint256";
        }, {
            readonly name: "receiver";
            readonly type: "bytes32";
            readonly indexed: false;
            readonly internalType: "bytes32";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "LiFiGenericSwapCompleted";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "integrator";
            readonly type: "string";
            readonly indexed: false;
            readonly internalType: "string";
        }, {
            readonly name: "referrer";
            readonly type: "string";
            readonly indexed: false;
            readonly internalType: "string";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "fromAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "toAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "fromAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "toAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "LiFiSwappedGeneric";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "integrator";
            readonly type: "string";
            readonly indexed: false;
            readonly internalType: "string";
        }, {
            readonly name: "referrer";
            readonly type: "string";
            readonly indexed: false;
            readonly internalType: "string";
        }, {
            readonly name: "fromAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "toAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "fromAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "toAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "LiFiTransferCompleted";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "receivingAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "timestamp";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "LiFiTransferRecovered";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "receivingAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "timestamp";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "LiFiTransferStarted";
        readonly inputs: readonly [{
            readonly name: "bridgeData";
            readonly type: "tuple";
            readonly indexed: false;
            readonly internalType: "struct ILiFi.BridgeData";
            readonly components: readonly [{
                readonly name: "transactionId";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "bridge";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "integrator";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "referrer";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "sendingAssetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "receiver";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "minAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "destinationChainId";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "hasSourceSwaps";
                readonly type: "bool";
                readonly internalType: "bool";
            }, {
                readonly name: "hasDestinationCall";
                readonly type: "bool";
                readonly internalType: "bool";
            }];
        }];
        readonly anonymous: false;
    }, {
        readonly type: "error";
        readonly name: "CannotBridgeToSameNetwork";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "ContractCallNotAllowed";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "CumulativeSlippageTooHigh";
        readonly inputs: readonly [{
            readonly name: "minAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "receivedAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
    }, {
        readonly type: "error";
        readonly name: "InformationMismatch";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InsufficientBalance";
        readonly inputs: readonly [{
            readonly name: "required";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "balance";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
    }, {
        readonly type: "error";
        readonly name: "InvalidAmount";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidContract";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidReceiver";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidReceiver";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NativeAssetTransferFailed";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NoSwapDataProvided";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NoSwapFromZeroBalance";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NoTransferToNullAddress";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NullAddrIsNotAValidSpender";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NullAddrIsNotAnERC20Token";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "ReentrancyError";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "SliceOutOfBounds";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "SliceOverflow";
        readonly inputs: readonly [];
    }];
    static createInterface(): MayanFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): MayanFacet;
}
export {};
