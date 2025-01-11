import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { ThorSwapFacet, ThorSwapFacetInterface } from "../ThorSwapFacet";
declare type ThorSwapFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class ThorSwapFacet__factory extends ContractFactory {
    constructor(...args: ThorSwapFacetConstructorParams);
    deploy(_thorchainRouter: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ThorSwapFacet>;
    getDeployTransaction(_thorchainRouter: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): ThorSwapFacet;
    connect(signer: Signer): ThorSwapFacet__factory;
    static readonly bytecode = "0x60a06040523480156200001157600080fd5b506040516200263238038062002632833981016040819052620000349162000046565b6001600160a01b031660805262000078565b6000602082840312156200005957600080fd5b81516001600160a01b03811681146200007157600080fd5b9392505050565b6080516125976200009b60003960008181610654015261067f01526125976000f3fe6080604052600436106100295760003560e01c80632541ec571461002e578063ad673d8814610043575b600080fd5b61004161003c366004612008565b610056565b005b61004161005136600461206c565b61027f565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016100d1576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006100e2344761212b565b9050846101078160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b1561013e576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c0015160000361017c576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036101b9576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b85806101000151156101f7576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8680610120015115610235576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61024788608001518960c001516104ac565b610251888861062c565b5047915050818111156102735761027360008461026e858561212b565b610784565b50506000909155505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016102fa576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815533600061030b344761212b565b90508680610100015161034a576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8780610120015115610388576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b886103ab8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156103e2576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c00151600003610420576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e001510361045d576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6104728a600001518b60c001518b8b336107b5565b60c08b01526104818a8861062c565b50479150508181111561049e5761049e60008461026e858561212b565b505060009091555050505050565b806000036104e6576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff821661053f578034101561053b576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa1580156105ac573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105d09190612165565b90508181101561061b576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044015b60405180910390fd5b610627833330856108f8565b505050565b608082015173ffffffffffffffffffffffffffffffffffffffff8116158061067d5761067d827f00000000000000000000000000000000000000000000000000000000000000008660c00151610b12565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166344bc937b826106c55760006106cb565b8560c001515b6106d8602087018761217e565b608088015160c08901516106ef60208a018a6121a0565b8a604001356040518863ffffffff1660e01b81526004016107159695949392919061220c565b6000604051808303818588803b15801561072e57600080fd5b505af1158015610742573d6000803e3d6000fd5b50505050507fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f1846040516107769190612300565b60405180910390a150505050565b73ffffffffffffffffffffffffffffffffffffffff8316156107ab57610627838383610c49565b6106278282610dcb565b6000828082036107f1576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000858561080060018561212b565b81811061080f5761080f612413565b90506020028101906108219190612442565b61083290608081019060600161217e565b9050600061083f82610ef5565b905073ffffffffffffffffffffffffffffffffffffffff821661086957610866348261212b565b90505b60006108758888610fae565b905061088188886110ba565b61088e8a89898985611127565b60008261089a85610ef5565b6108a4919061212b565b9050898110156108ea576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b905260248101829052604401610612565b9a9950505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8416610945576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610992576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa158015610a03573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a279190612165565b9050610a35828686866114d9565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa158015610aa5573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ac99190612165565b610ad3919061212b565b14610b0a576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b73ffffffffffffffffffffffffffffffffffffffff8316610b3257505050565b73ffffffffffffffffffffffffffffffffffffffff8216610b7f576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015282919085169063dd62ed3e90604401602060405180830381865afa158015610bf4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c189190612165565b10156106275761062783837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6115b5565b73ffffffffffffffffffffffffffffffffffffffff8316610c96576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610ce3576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa158015610d50573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d749190612165565b905080821115610dba576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810183905260248101829052604401610612565b610dc58484846116a5565b50505050565b73ffffffffffffffffffffffffffffffffffffffff8216610e18576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b47811115610e5b576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101829052476024820152604401610612565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d8060008114610eb5576040519150601f19603f3d011682016040523d82523d6000602084013e610eba565b606091505b5050905080610627576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff821615610fa6576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa158015610f7d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fa19190612165565b610fa8565b475b92915050565b60608160008167ffffffffffffffff811115610fcc57610fcc611dc2565b604051908082528060200260200182016040528015610ff5578160200160208202803683370190505b5090506000805b838110156110af5786868281811061101657611016612413565b90506020028101906110289190612442565b61103990608081019060600161217e565b915061104482610ef5565b83828151811061105657611056612413565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff82166110a7573483828151811061108f5761108f612413565b602002602001018181516110a3919061212b565b9052505b600101610ffc565b509095945050505050565b60005b8181101561062757368383838181106110d8576110d8612413565b90506020028101906110ea9190612442565b90506110fc60e0820160c08301612480565b1561111e5761111e611114606083016040840161217e565b82608001356104ac565b506001016110bd565b8383838382600181146113f4576000858561114360018561212b565b81811061115257611152612413565b90506020028101906111649190612442565b61117590608081019060600161217e565b9050600089815b8181101561132057368d8d8381811061119757611197612413565b90506020028101906111a99190612442565b90506111d86111be606083016040840161217e565b73ffffffffffffffffffffffffffffffffffffffff161590565b8061123b575061123b6111f1604083016020840161217e565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b801561125257506112526111f1602083018361217e565b80156112d757506112d761126960a08301836121a0565b6112789160049160009161249d565b611281916124c7565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b61130d576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6113178f826116fb565b5060010161117c565b505060005b61133060018561212b565b8110156113ec57600088888381811061134b5761134b612413565b905060200281019061135d9190612442565b61136e90608081019060600161217e565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146113e3578582815181106113b5576113b5612413565b60200260200101516113c682610ef5565b6113d0919061212b565b925082156113e3576113e3818885610784565b50600101611325565b5050506114cd565b8760005b818110156114ca57368b8b8381811061141357611413612413565b90506020028101906114259190612442565b905061143a6111be606083016040840161217e565b8061145357506114536111f1604083016020840161217e565b801561146a575061146a6111f1602083018361217e565b8015611481575061148161126960a08301836121a0565b6114b7576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6114c18d826116fb565b506001016113f8565b50505b50505050505050505050565b60405173ffffffffffffffffffffffffffffffffffffffff80851660248301528316604482015260648101829052610dc59085907f23b872dd00000000000000000000000000000000000000000000000000000000906084015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff00000000000000000000000000000000000000000000000000000000909316929092179091526119d9565b6040805173ffffffffffffffffffffffffffffffffffffffff8416602482015260448082018490528251808303909101815260649091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f095ea7b3000000000000000000000000000000000000000000000000000000001790526116418482611ae8565b610dc55760405173ffffffffffffffffffffffffffffffffffffffff841660248201526000604482015261169b9085907f095ea7b30000000000000000000000000000000000000000000000000000000090606401611533565b610dc584826119d9565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526106279084907fa9059cbb0000000000000000000000000000000000000000000000000000000090606401611533565b61171161170b602083018361217e565b3b151590565b611747576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101356000819003611787576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600061179c6111be606085016040860161217e565b6117a75760006117ad565b82608001355b905060006117c96117c4606086016040870161217e565b610ef5565b905060006117e06117c4608087016060880161217e565b905082600003611817576118176117fd606087016040880161217e565b61180d604088016020890161217e565b8760800135610b12565b8460800135821015611862576040517fcf4791810000000000000000000000000000000000000000000000000000000081526080860135600482015260248101839052604401610612565b600080611872602088018861217e565b73ffffffffffffffffffffffffffffffffffffffff168561189660a08a018a6121a0565b6040516118a492919061250f565b60006040518083038185875af1925050503d80600081146118e1576040519150601f19603f3d011682016040523d82523d6000602084013e6118e6565b606091505b5091509150816118f9576118f981611ba9565b600061190e6117c460808a0160608b0161217e565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388961193f60208b018b61217e565b61194f60608c0160408d0161217e565b61195f60808d0160608e0161217e565b8c60800135898711611971578661197b565b61197b8a8861212b565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b6000611a3b826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16611bb39092919063ffffffff16565b9050805160001480611a5c575080806020019051810190611a5c919061251f565b610627576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610612565b60008060008473ffffffffffffffffffffffffffffffffffffffff1684604051611b12919061253c565b6000604051808303816000865af19150503d8060008114611b4f576040519150601f19603f3d011682016040523d82523d6000602084013e611b54565b606091505b5091509150818015611b7e575080511580611b7e575080806020019051810190611b7e919061251f565b8015611ba0575073ffffffffffffffffffffffffffffffffffffffff85163b15155b95945050505050565b8051602082018181fd5b6060611bc28484600085611bca565b949350505050565b606082471015611c5c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610612565b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051611c85919061253c565b60006040518083038185875af1925050503d8060008114611cc2576040519150601f19603f3d011682016040523d82523d6000602084013e611cc7565b606091505b5091509150611cd887838387611ce3565b979650505050505050565b60608315611d79578251600003611d725773ffffffffffffffffffffffffffffffffffffffff85163b611d72576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610612565b5081611bc2565b611bc28383815115611d8e5781518083602001fd5b806040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610612919061254e565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff81118282101715611e1557611e15611dc2565b60405290565b600082601f830112611e2c57600080fd5b813567ffffffffffffffff80821115611e4757611e47611dc2565b604051601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f01168101908282118183101715611e8d57611e8d611dc2565b81604052838152866020858801011115611ea657600080fd5b836020870160208301376000602085830101528094505050505092915050565b803573ffffffffffffffffffffffffffffffffffffffff81168114611eea57600080fd5b919050565b8015158114611efd57600080fd5b50565b8035611eea81611eef565b60006101408284031215611f1e57600080fd5b611f26611df1565b905081358152602082013567ffffffffffffffff80821115611f4757600080fd5b611f5385838601611e1b565b60208401526040840135915080821115611f6c57600080fd5b50611f7984828501611e1b565b604083015250611f8b60608301611ec6565b6060820152611f9c60808301611ec6565b6080820152611fad60a08301611ec6565b60a082015260c082013560c082015260e082013560e0820152610100611fd4818401611f00565b90820152610120611fe6838201611f00565b9082015292915050565b60006060828403121561200257600080fd5b50919050565b6000806040838503121561201b57600080fd5b823567ffffffffffffffff8082111561203357600080fd5b61203f86838701611f0b565b9350602085013591508082111561205557600080fd5b5061206285828601611ff0565b9150509250929050565b6000806000806060858703121561208257600080fd5b843567ffffffffffffffff8082111561209a57600080fd5b6120a688838901611f0b565b955060208701359150808211156120bc57600080fd5b818701915087601f8301126120d057600080fd5b8135818111156120df57600080fd5b8860208260051b85010111156120f457600080fd5b60208301955080945050604087013591508082111561211257600080fd5b5061211f87828801611ff0565b91505092959194509250565b81810381811115610fa8577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006020828403121561217757600080fd5b5051919050565b60006020828403121561219057600080fd5b61219982611ec6565b9392505050565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe18436030181126121d557600080fd5b83018035915067ffffffffffffffff8211156121f057600080fd5b60200191503681900382131561220557600080fd5b9250929050565b600073ffffffffffffffffffffffffffffffffffffffff808916835280881660208401525085604083015260a060608301528360a0830152838560c0840137600060c0858401015260c07fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8601168301019050826080830152979650505050505050565b60005b838110156122ad578181015183820152602001612295565b50506000910152565b600081518084526122ce816020860160208601612292565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b6020815281516020820152600060208301516101408060408501526123296101608501836122b6565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe085840301606086015261236483826122b6565b925050606085015161238e608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e08501516101008181870152808701519150506101206124018187018315159052565b90950151151593019290925250919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2183360301811261247657600080fd5b9190910192915050565b60006020828403121561249257600080fd5b813561219981611eef565b600080858511156124ad57600080fd5b838611156124ba57600080fd5b5050820193919092039150565b7fffffffff0000000000000000000000000000000000000000000000000000000081358181169160048510156125075780818660040360031b1b83161692505b505092915050565b8183823760009101908152919050565b60006020828403121561253157600080fd5b815161219981611eef565b60008251612476818460208701612292565b60208152600061219960208301846122b656fea2646970667358221220a786688373138a8bb2a24751b394b5516d1843899ef4032cef3d21efeac320a564736f6c63430008110033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_thorchainRouter";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaThorSwap";
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
            readonly name: "_thorSwapData";
            readonly type: "tuple";
            readonly internalType: "struct ThorSwapFacet.ThorSwapData";
            readonly components: readonly [{
                readonly name: "vault";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "memo";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "expiration";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "swapAndStartBridgeTokensViaThorSwap";
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
            readonly name: "_thorSwapData";
            readonly type: "tuple";
            readonly internalType: "struct ThorSwapFacet.ThorSwapData";
            readonly components: readonly [{
                readonly name: "vault";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "memo";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "expiration";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
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
    }];
    static createInterface(): ThorSwapFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ThorSwapFacet;
}
export {};
