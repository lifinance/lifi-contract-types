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
    static readonly bytecode = "0x60a06040523480156200001157600080fd5b5060405162002ade38038062002ade833981016040819052620000349162000046565b6001600160a01b031660805262000078565b6000602082840312156200005957600080fd5b81516001600160a01b03811681146200007157600080fd5b9392505050565b608051612a36620000a8600039600081816073015281816106b1015281816106fb01526107b10152612a366000f3fe6080604052600436106100345760003560e01c80631cf2902614610039578063697a3bdb1461004e578063bc98b5dc14610061575b600080fd5b61004c6100473660046123a8565b6100be565b005b61004c61005c366004612467565b6102f0565b34801561006d57600080fd5b506100957f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610139576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815533600061014a34476124fa565b905086806101000151610189576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b87806101200151156101c7576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b886101ea8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b15610221576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c0015160000361025f576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e001510361029c576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6102b18a600001518b60c001518b8b33610514565b60c08b01526102c08a8861065c565b5047915050818111156102e2576102e26000846102dd85856124fa565b610909565b505060009091555050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0161036b576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815533600061037c34476124fa565b9050846103a18160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156103d8576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c00151600003610416576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610453576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8580610100015115610491576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b86806101200151156104cf576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6104e188608001518960c0015161093f565b6104eb888861065c565b504791505081811115610508576105086000846102dd85856124fa565b50506000909155505050565b600082808203610550576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000858561055f6001856124fa565b81811061056e5761056e61250d565b9050602002810190610580919061253c565b61059190608081019060600161257a565b9050600061059e82610ab5565b905073ffffffffffffffffffffffffffffffffffffffff82166105c8576105c534826124fa565b90505b60006105d48888610b6e565b90506105e08888610c7a565b6105ed8a89898985610ce7565b6000826105f985610ab5565b61060391906124fa565b90508981101561064e576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b9052602481018290526044015b60405180910390fd5b9a9950505050505050505050565b6040805160a081018252600080825260208201819052918101829052606081018290526080810191909152608083015173ffffffffffffffffffffffffffffffffffffffff1615610795576106da83608001517f00000000000000000000000000000000000000000000000000000000000000008560c00151611099565b608083015160c084015173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000169163e4269fc49184610730602088018861257a565b61073d6020890189612595565b6040518763ffffffff1660e01b815260040161075e9695949392919061264a565b600060405180830381600087803b15801561077857600080fd5b505af115801561078c573d6000803e3d6000fd5b50505050610843565b60c083015173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000169063b0f584ff906107e5602086018661257a565b6107f26020870187612595565b6040518563ffffffff1660e01b8152600401610810939291906126cb565b6000604051808303818588803b15801561082957600080fd5b505af115801561083d573d6000803e3d6000fd5b50505050505b7311f111f111f111f111f111f111f111f111f111f173ffffffffffffffffffffffffffffffffffffffff168360a0015173ffffffffffffffffffffffffffffffffffffffff16036108cd5760e08301518351604080519085013581527f7be3e48a8a8b4d32138937e1809ac83481fffe48e49bb60e43ed1d3d50349e4c9060200160405180910390a35b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f1836040516108fc9190612772565b60405180910390a1505050565b73ffffffffffffffffffffffffffffffffffffffff831615610935576109308383836111dc565b505050565b610930828261135e565b80600003610979576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166109d257803410156109ce576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa158015610a3f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a639190612885565b905081811015610aa9576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810183905260248101829052604401610645565b61093083333085611488565b600073ffffffffffffffffffffffffffffffffffffffff821615610b66576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa158015610b3d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b619190612885565b610b68565b475b92915050565b60608160008167ffffffffffffffff811115610b8c57610b8c612122565b604051908082528060200260200182016040528015610bb5578160200160208202803683370190505b5090506000805b83811015610c6f57868682818110610bd657610bd661250d565b9050602002810190610be8919061253c565b610bf990608081019060600161257a565b9150610c0482610ab5565b838281518110610c1657610c1661250d565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610c675734838281518110610c4f57610c4f61250d565b60200260200101818151610c6391906124fa565b9052505b600101610bbc565b509095945050505050565b60005b818110156109305736838383818110610c9857610c9861250d565b9050602002810190610caa919061253c565b9050610cbc60e0820160c0830161289e565b15610cde57610cde610cd4606083016040840161257a565b826080013561093f565b50600101610c7d565b838383838260018114610fb45760008585610d036001856124fa565b818110610d1257610d1261250d565b9050602002810190610d24919061253c565b610d3590608081019060600161257a565b9050600089815b81811015610ee057368d8d83818110610d5757610d5761250d565b9050602002810190610d69919061253c565b9050610d98610d7e606083016040840161257a565b73ffffffffffffffffffffffffffffffffffffffff161590565b80610dfb5750610dfb610db1604083016020840161257a565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b8015610e125750610e12610db1602083018361257a565b8015610e975750610e97610e2960a0830183612595565b610e38916004916000916128bb565b610e41916128e5565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b610ecd576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610ed78f826116a2565b50600101610d3c565b505060005b610ef06001856124fa565b811015610fac576000888883818110610f0b57610f0b61250d565b9050602002810190610f1d919061253c565b610f2e90608081019060600161257a565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610fa357858281518110610f7557610f7561250d565b6020026020010151610f8682610ab5565b610f9091906124fa565b92508215610fa357610fa3818885610909565b50600101610ee5565b50505061108d565b8760005b8181101561108a57368b8b83818110610fd357610fd361250d565b9050602002810190610fe5919061253c565b9050610ffa610d7e606083016040840161257a565b806110135750611013610db1604083016020840161257a565b801561102a575061102a610db1602083018361257a565b80156110415750611041610e2960a0830183612595565b611077576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6110818d826116a2565b50600101610fb8565b50505b50505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff83166110b957505050565b73ffffffffffffffffffffffffffffffffffffffff8216611106576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015282919085169063dd62ed3e90604401602060405180830381865afa15801561117b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061119f9190612885565b1015610930576111b1838360006119b8565b61093083837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6119b8565b73ffffffffffffffffffffffffffffffffffffffff8316611229576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216611276576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa1580156112e3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113079190612885565b90508082111561134d576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810183905260248101829052604401610645565b611358848484611bb8565b50505050565b73ffffffffffffffffffffffffffffffffffffffff82166113ab576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b478111156113ee576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101829052476024820152604401610645565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d8060008114611448576040519150601f19603f3d011682016040523d82523d6000602084013e61144d565b606091505b5050905080610930576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff84166114d5576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216611522576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa158015611593573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115b79190612885565b90506115c582868686611c0e565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa158015611635573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116599190612885565b61166391906124fa565b1461169a576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b6116b86116b2602083018361257a565b3b151590565b6116ee576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6080810135600081900361172e576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000611743610d7e606085016040860161257a565b61174e576000611754565b82608001355b9050600061177061176b606086016040870161257a565b610ab5565b9050600061178761176b608087016060880161257a565b9050826000036117be576117be6117a4606087016040880161257a565b6117b4604088016020890161257a565b8760800135611099565b8460800135821015611809576040517fcf4791810000000000000000000000000000000000000000000000000000000081526080860135600482015260248101839052604401610645565b600080611819602088018861257a565b73ffffffffffffffffffffffffffffffffffffffff168561183d60a08a018a612595565b60405161184b92919061292d565b60006040518083038185875af1925050503d8060008114611888576040519150601f19603f3d011682016040523d82523d6000602084013e61188d565b606091505b5091509150816118d85760006118a282611c6c565b9050806040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610645919061293d565b60006118ed61176b60808a0160608b0161257a565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388961191e60208b018b61257a565b61192e60608c0160408d0161257a565b61193e60808d0160608e0161257a565b8c60800135898711611950578661195a565b61195a8a886124fa565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b801580611a5857506040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015284169063dd62ed3e90604401602060405180830381865afa158015611a32573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611a569190612885565b155b611ae4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527f20746f206e6f6e2d7a65726f20616c6c6f77616e6365000000000000000000006064820152608401610645565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526109309084907f095ea7b300000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611cea565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526109309084907fa9059cbb0000000000000000000000000000000000000000000000000000000090606401611b36565b60405173ffffffffffffffffffffffffffffffffffffffff808516602483015283166044820152606481018290526113589085907f23b872dd0000000000000000000000000000000000000000000000000000000090608401611b36565b6060604482511015611cb157505060408051808201909152601d81527f5472616e73616374696f6e2072657665727465642073696c656e746c79000000602082015290565b6000611ccd6004808551611cc591906124fa565b859190611df9565b905080806020019051810190611ce39190612950565b9392505050565b6000611d4c826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16611f139092919063ffffffff16565b9050805160001480611d6d575080806020019051810190611d6d91906129be565b610930576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610645565b606081611e0781601f6129db565b1015611e3f576040517f47aaf07a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b611e4982846129db565b84511015611e83576040517f3b99b53d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b606082158015611ea25760405191506000825260208201604052611f0a565b6040519150601f8416801560200281840101858101878315602002848b0101015b81831015611edb578051835260209283019201611ec3565b5050858452601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016604052505b50949350505050565b6060611f228484600085611f2a565b949350505050565b606082471015611fbc576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610645565b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051611fe591906129ee565b60006040518083038185875af1925050503d8060008114612022576040519150601f19603f3d011682016040523d82523d6000602084013e612027565b606091505b509150915061203887838387612043565b979650505050505050565b606083156120d95782516000036120d25773ffffffffffffffffffffffffffffffffffffffff85163b6120d2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610645565b5081611f22565b611f2283838151156120ee5781518083602001fd5b806040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610645919061293d565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff8111828210171561217557612175612122565b60405290565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff811182821017156121c2576121c2612122565b604052919050565b600067ffffffffffffffff8211156121e4576121e4612122565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b600082601f83011261222157600080fd5b813561223461222f826121ca565b61217b565b81815284602083860101111561224957600080fd5b816020850160208301376000918101602001919091529392505050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461228a57600080fd5b919050565b801515811461229d57600080fd5b50565b803561228a8161228f565b600061014082840312156122be57600080fd5b6122c6612151565b905081358152602082013567ffffffffffffffff808211156122e757600080fd5b6122f385838601612210565b6020840152604084013591508082111561230c57600080fd5b5061231984828501612210565b60408301525061232b60608301612266565b606082015261233c60808301612266565b608082015261234d60a08301612266565b60a082015260c082013560c082015260e082013560e08201526101006123748184016122a0565b908201526101206123868382016122a0565b9082015292915050565b6000606082840312156123a257600080fd5b50919050565b600080600080606085870312156123be57600080fd5b843567ffffffffffffffff808211156123d657600080fd5b6123e2888389016122ab565b955060208701359150808211156123f857600080fd5b818701915087601f83011261240c57600080fd5b81358181111561241b57600080fd5b8860208260051b850101111561243057600080fd5b60208301955080945050604087013591508082111561244e57600080fd5b5061245b87828801612390565b91505092959194509250565b6000806040838503121561247a57600080fd5b823567ffffffffffffffff8082111561249257600080fd5b61249e868387016122ab565b935060208501359150808211156124b457600080fd5b506124c185828601612390565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b81810381811115610b6857610b686124cb565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2183360301811261257057600080fd5b9190910192915050565b60006020828403121561258c57600080fd5b611ce382612266565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe18436030181126125ca57600080fd5b83018035915067ffffffffffffffff8211156125e557600080fd5b6020019150368190038213156125fa57600080fd5b9250929050565b8183528181602085013750600060208284010152600060207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116840101905092915050565b600061012073ffffffffffffffffffffffffffffffffffffffff808a168452886020850152875160408501526020880151606085015260ff6040890151166080850152606088015160a0850152608088015160c085015280871660e085015250806101008401526126be8184018587612601565b9998505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff841681526040602082015260006126fb604083018486612601565b95945050505050565b60005b8381101561271f578181015183820152602001612707565b50506000910152565b60008151808452612740816020860160208601612704565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b60208152815160208201526000602083015161014080604085015261279b610160850183612728565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08584030160608601526127d68382612728565b9250506060850151612800608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e08501516101008181870152808701519150506101206128738187018315159052565b90950151151593019290925250919050565b60006020828403121561289757600080fd5b5051919050565b6000602082840312156128b057600080fd5b8135611ce38161228f565b600080858511156128cb57600080fd5b838611156128d857600080fd5b5050820193919092039150565b7fffffffff0000000000000000000000000000000000000000000000000000000081358181169160048510156129255780818660040360031b1b83161692505b505092915050565b8183823760009101908152919050565b602081526000611ce36020830184612728565b60006020828403121561296257600080fd5b815167ffffffffffffffff81111561297957600080fd5b8201601f8101841361298a57600080fd5b805161299861222f826121ca565b8181528560208385010111156129ad57600080fd5b6126fb826020830160208601612704565b6000602082840312156129d057600080fd5b8151611ce38161228f565b80820180821115610b6857610b686124cb565b6000825161257081846020870161270456fea26469706673582212207c7f26c6b19cf1a7859b0ab9885ef854beb6c60561d043faba3d9f44c2cbf88364736f6c63430008110033";
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
                readonly name: "mayanProtocol";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "protocolData";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "nonEVMReceiver";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
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
                readonly name: "mayanProtocol";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "protocolData";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "nonEVMReceiver";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
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
