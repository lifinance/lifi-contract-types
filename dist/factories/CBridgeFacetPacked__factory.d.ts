import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { CBridgeFacetPacked, CBridgeFacetPackedInterface } from "../CBridgeFacetPacked";
type CBridgeFacetPackedConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class CBridgeFacetPacked__factory extends ContractFactory {
    constructor(...args: CBridgeFacetPackedConstructorParams);
    deploy(_cBridge: PromiseOrValue<string>, _owner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<CBridgeFacetPacked>;
    getDeployTransaction(_cBridge: PromiseOrValue<string>, _owner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): CBridgeFacetPacked;
    connect(signer: Signer): CBridgeFacetPacked__factory;
    static readonly bytecode = "0x60a06040523480156200001157600080fd5b50604051620024a3380380620024a3833981016040819052620000349162000073565b600080546001600160a01b0319166001600160a01b0392831617905516608052620000b2565b6001600160a01b03811681146200007057600080fd5b50565b600080604083850312156200008757600080fd5b825162000094816200005a565b6020840151909250620000a7816200005a565b809150509250929050565b6080516123b2620000f16000396000818161030901528181610524015281816106500152818161095a0152818161125301526114e101526123b26000f3fe6080604052600436106100eb5760003560e01c8063a2ed56071161008a578063e30c397811610059578063e30c397814610270578063f2fde38b1461029d578063f6848697146102bd578063fc852c5a146102d257600080fd5b8063a2ed5607146101d5578063aef365ad14610202578063be8a84ac14610222578063dee4be1b1461025057600080fd5b806323452b9c116100c657806323452b9c146101345780634c478642146101495780637200b829146101695780638da5cb5b1461017e57600080fd5b806278afb6146100f75780630193979f146101015780630d19e5191461011457600080fd5b366100f257005b600080fd5b6100ff6102f2565b005b6100ff61010f366004611d45565b6104b3565b34801561012057600080fd5b506100ff61012f366004611de7565b6105e6565b34801561014057600080fd5b506100ff610808565b34801561015557600080fd5b506100ff610164366004611e6c565b6108d2565b34801561017557600080fd5b506100ff6109b6565b34801561018a57600080fd5b506000546101ab9073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b3480156101e157600080fd5b506101f56101f0366004611d45565b610a9c565b6040516101cc9190611f45565b34801561020e57600080fd5b506101f561021d366004611f5f565b610cb7565b34801561022e57600080fd5b5061024261023d366004611fdb565b610fa4565b6040516101cc92919061201d565b34801561025c57600080fd5b506100ff61026b366004611f5f565b6111b9565b34801561027c57600080fd5b506001546101ab9073ffffffffffffffffffffffffffffffffffffffff1681565b3480156102a957600080fd5b506100ff6102b8366004612164565b61130e565b3480156102c957600080fd5b506100ff61146c565b3480156102de57600080fd5b506102426102ed366004611fdb565b611692565b73ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016633f2e5fc33461033e6020600c366000612181565b610347916121ab565b60601c3461035a60246020366000612181565b610363916121f3565b60e01c61037560286024366000612181565b61037e916121f3565b60e01c610390602c6028366000612181565b610399916121f3565b60405160e088811b7fffffffff0000000000000000000000000000000000000000000000000000000016825273ffffffffffffffffffffffffffffffffffffffff969096166004820152602481019490945267ffffffffffffffff92831660448501529116606483015290911c608482015260a4016000604051808303818588803b15801561042757600080fd5b505af115801561043b573d6000803e3d6000fd5b507fa077806f66785ea82e50e8f766774abda4273ecc52c93187184e0400e50de32193506104749250600c915060049050366000612181565b61047d91612239565b6040517fffffffffffffffff000000000000000000000000000000000000000000000000909116815260200160405180910390a1565b6040517f3f2e5fc300000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152346024830181905267ffffffffffffffff80871660448501528516606484015263ffffffff841660848401527f000000000000000000000000000000000000000000000000000000000000000090911691633f2e5fc3919060a4016000604051808303818588803b15801561056a57600080fd5b505af115801561057e573d6000803e3d6000fd5b50506040517fffffffffffffffff000000000000000000000000000000000000000000000000891681527fa077806f66785ea82e50e8f766774abda4273ecc52c93187184e0400e50de321935060200191506105d79050565b60405180910390a15050505050565b60005473ffffffffffffffffffffffffffffffffffffffff163314610637576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8573ffffffffffffffffffffffffffffffffffffffff167f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16146106bc576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008673ffffffffffffffffffffffffffffffffffffffff1686866040516106e592919061227f565b6000604051808303816000865af19150503d8060008114610722576040519150601f19603f3d011682016040523d82523d6000602084013e610727565b606091505b50508091505080610764576040517f350c20f100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff841615610788578361078a565b335b90506107978582856118ca565b8073ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff167f9779662e766b5675e69e09303bc2f58ae30397b71b8021ab947defd27747b95f856040516107f691815260200190565b60405180910390a35050505050505050565b60005473ffffffffffffffffffffffffffffffffffffffff163314610859576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60015473ffffffffffffffffffffffffffffffffffffffff166108a8576040517f75cdea1200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b60005473ffffffffffffffffffffffffffffffffffffffff163314610923576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60005b818110156109b15761099f8383838181106109435761094361228f565b90506020020160208101906109589190612164565b7f00000000000000000000000000000000000000000000000000000000000000007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6118fa565b806109a9816122be565b915050610926565b505050565b60015473ffffffffffffffffffffffffffffffffffffffff16338114610a08576040517f1853971c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000805460405173ffffffffffffffffffffffffffffffffffffffff808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a36000805473ffffffffffffffffffffffffffffffffffffffff9092167fffffffffffffffffffffffff0000000000000000000000000000000000000000928316179055600180549091169055565b606063ffffffff67ffffffffffffffff85161115610b41576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603860248201527f64657374696e6174696f6e436861696e49642076616c7565207061737365642060448201527f746f6f2062696720746f2066697420696e2075696e743332000000000000000060648201526084015b60405180910390fd5b63ffffffff67ffffffffffffffff84161115610bdf576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602b60248201527f6e6f6e63652076616c75652070617373656420746f6f2062696720746f20666960448201527f7420696e2075696e7433320000000000000000000000000000000000000000006064820152608401610b38565b50604080517e78afb60000000000000000000000000000000000000000000000000000000060208201527fffffffffffffffff00000000000000000000000000000000000000000000000096909616602487015260609490941b7fffffffffffffffffffffffffffffffffffffffff00000000000000000000000016602c8087019190915260e093841b7fffffffff000000000000000000000000000000000000000000000000000000009081168787015292841b83166044870152921b16604884015281518084039091018152604c909201905290565b606063ffffffff67ffffffffffffffff87161115610d57576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603860248201527f64657374696e6174696f6e436861696e49642076616c7565207061737365642060448201527f746f6f2062696720746f2066697420696e2075696e74333200000000000000006064820152608401610b38565b6fffffffffffffffffffffffffffffffff841115610df7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602d60248201527f616d6f756e742076616c75652070617373656420746f6f2062696720746f206660448201527f697420696e2075696e74313238000000000000000000000000000000000000006064820152608401610b38565b63ffffffff67ffffffffffffffff84161115610e95576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602b60248201527f6e6f6e63652076616c75652070617373656420746f6f2062696720746f20666960448201527f7420696e2075696e7433320000000000000000000000000000000000000000006064820152608401610b38565b50604080517ff68486970000000000000000000000000000000000000000000000000000000060208201527fffffffffffffffff000000000000000000000000000000000000000000000000989098166024890152606096871b7fffffffffffffffffffffffffffffffffffffffff000000000000000000000000908116602c8a015260e096871b7fffffffff000000000000000000000000000000000000000000000000000000009081168a8401529590971b909616604488015260809290921b7fffffffffffffffffffffffffffffffff00000000000000000000000000000000166058870152831b8216606886015290911b16606c830152805180830360500181526070909201905290565b60408051610140810182526000808252606060208084018290528385018290529083018290526080830182905260a0830182905260c0830182905260e0830182905261010083018290526101208301829052835180850190945281845283015290602c831015611096576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602860248201527f646174612070617373656420696e206973206e6f742074686520636f7272656360448201527f74206c656e6774680000000000000000000000000000000000000000000000006064820152608401610b38565b60408051610140810182526000808252606060208084018290528385018290529083018290526080830182905260a0830182905260c0830182905260e0830182905261010083018290526101208301829052835180850190945281845283015290611105600c60048789612181565b61110e91612239565b7fffffffffffffffff0000000000000000000000000000000000000000000000001682526111406020600c8789612181565b611149916121ab565b60601c60a083015261115f602460208789612181565b611168916121f3565b60e090811c9083015261117f602860248789612181565b611188916121f3565b60e01c602082015261119e602c60288789612181565b6111a7916121f3565b60e01c815290925090505b9250929050565b6111db73ffffffffffffffffffffffffffffffffffffffff8516333086611926565b6040517fa5977fbb00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff878116600483015285811660248301526044820185905267ffffffffffffffff80881660648401528416608483015263ffffffff831660a48301527f0000000000000000000000000000000000000000000000000000000000000000169063a5977fbb9060c401600060405180830381600087803b15801561129757600080fd5b505af11580156112ab573d6000803e3d6000fd5b50506040517fffffffffffffffff0000000000000000000000000000000000000000000000008a1681527fa077806f66785ea82e50e8f766774abda4273ecc52c93187184e0400e50de3219250602001905060405180910390a150505050505050565b60005473ffffffffffffffffffffffffffffffffffffffff16331461135f576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff81166113ac576040517f1beca37400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff8216036113fb576040517fbf1ea9fb00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff831690811790915560405133907fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae127890600090a350565b600061147c603860243684612181565b611485916121ab565b60601c9050600061149a604860383684612181565b6114a39161231d565b60801c90506114ca73ffffffffffffffffffffffffffffffffffffffff8316333084611926565b73ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001663a5977fbb6115156020600c366000612181565b61151e916121ab565b60601c848461153260246020366000612181565b61153b916121f3565b60e01c61154d604c6048366000612181565b611556916121f3565b60e01c6115686050604c366000612181565b611571916121f3565b60405160e088811b7fffffffff0000000000000000000000000000000000000000000000000000000016825273ffffffffffffffffffffffffffffffffffffffff9788166004830152959096166024870152604486019390935267ffffffffffffffff9182166064860152166084840152901c60a482015260c401600060405180830381600087803b15801561160657600080fd5b505af115801561161a573d6000803e3d6000fd5b507fa077806f66785ea82e50e8f766774abda4273ecc52c93187184e0400e50de32192506116519150600c90506004366000612181565b61165a91612239565b6040517fffffffffffffffff000000000000000000000000000000000000000000000000909116815260200160405180910390a15050565b60408051610140810182526000808252606060208084018290528385018290529083018290526080830182905260a0830182905260c0830182905260e08301829052610100830182905261012083018290528351808501909452818452830152906050831015611784576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f6461746120706173736564206973206e6f742074686520636f7272656374206c60448201527f656e6774680000000000000000000000000000000000000000000000000000006064820152608401610b38565b60408051610140810182526000808252606060208084018290528385018290529083018290526080830182905260a0830182905260c0830182905260e08301829052610100830182905261012083018290528351808501909452818452830152906117f3600c60048789612181565b6117fc91612239565b7fffffffffffffffff00000000000000000000000000000000000000000000000016825261182e6020600c8789612181565b611837916121ab565b60601c60a083015261184d602460208789612181565b611856916121f3565b60e090811c9083015261186d603860248789612181565b611876916121ab565b60601c608083015261188c604860388789612181565b6118959161231d565b60801c60c08301526118ab604c60488789612181565b6118b4916121f3565b60e01c602082015261119e6050604c8789612181565b73ffffffffffffffffffffffffffffffffffffffff83166118ef576109b182826119ec565b6109b1838383611a5d565b6109b18383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611acb565b60006040517f23b872dd0000000000000000000000000000000000000000000000000000000081528460048201528360248201528260448201526020600060648360008a5af13d15601f3d11600160005114161716915050806119e5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f5452414e534645525f46524f4d5f4641494c45440000000000000000000000006044820152606401610b38565b5050505050565b73ffffffffffffffffffffffffffffffffffffffff8216611a39576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b611a5973ffffffffffffffffffffffffffffffffffffffff831682611bfa565b5050565b73ffffffffffffffffffffffffffffffffffffffff8216611aaa576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6109b173ffffffffffffffffffffffffffffffffffffffff84168383611c16565b73ffffffffffffffffffffffffffffffffffffffff841615611bf45773ffffffffffffffffffffffffffffffffffffffff8316611b34576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa158015611ba9573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611bcd9190612363565b1015611bf457611bf473ffffffffffffffffffffffffffffffffffffffff85168483611c65565b50505050565b60003860003884865af1611a595763b12d13eb6000526004601cfd5b81601452806034526fa9059cbb00000000000000000000000060005260206000604460106000875af13d156001600051141716611c5b576390b8ec186000526004601cfd5b6000603452505050565b81601452806034526f095ea7b300000000000000000000000060005260206000604460106000875af13d156001600051141716611c5b5760006034526f095ea7b3000000000000000000000000600052600038604460106000875af1508060345260206000604460106000875af13d156001600051141716611c5b57633e3f8f736000526004601cfd5b73ffffffffffffffffffffffffffffffffffffffff81168114611d1157600080fd5b50565b803567ffffffffffffffff81168114611d2c57600080fd5b919050565b803563ffffffff81168114611d2c57600080fd5b600080600080600060a08688031215611d5d57600080fd5b853594506020860135611d6f81611cef565b9350611d7d60408701611d14565b9250611d8b60608701611d14565b9150611d9960808701611d31565b90509295509295909350565b60008083601f840112611db757600080fd5b50813567ffffffffffffffff811115611dcf57600080fd5b6020830191508360208285010111156111b257600080fd5b60008060008060008060a08789031215611e0057600080fd5b8635611e0b81611cef565b9550602087013567ffffffffffffffff811115611e2757600080fd5b611e3389828a01611da5565b9096509450506040870135611e4781611cef565b92506060870135611e5781611cef565b80925050608087013590509295509295509295565b60008060208385031215611e7f57600080fd5b823567ffffffffffffffff80821115611e9757600080fd5b818501915085601f830112611eab57600080fd5b813581811115611eba57600080fd5b8660208260051b8501011115611ecf57600080fd5b60209290920196919550909350505050565b6000815180845260005b81811015611f0757602081850181015186830182015201611eeb565b5060006020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b602081526000611f586020830184611ee1565b9392505050565b600080600080600080600060e0888a031215611f7a57600080fd5b873596506020880135611f8c81611cef565b9550611f9a60408901611d14565b94506060880135611faa81611cef565b935060808801359250611fbf60a08901611d14565b9150611fcd60c08901611d31565b905092959891949750929550565b60008060208385031215611fee57600080fd5b823567ffffffffffffffff81111561200557600080fd5b61201185828601611da5565b90969095509350505050565b6060815282516060820152600060208401516101408060808501526120466101a0850183611ee1565b915060408601517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa08584030160a08601526120818382611ee1565b92505060608601516120ab60c086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608086015173ffffffffffffffffffffffffffffffffffffffff811660e08601525060a08601516101006120f78187018373ffffffffffffffffffffffffffffffffffffffff169052565b60c08801519150610120828188015260e08901518488015281890151935061212461016088018515159052565b880151801515610180880152925061213a915050565b509050611f586020830184805163ffffffff16825260209081015167ffffffffffffffff16910152565b60006020828403121561217657600080fd5b8135611f5881611cef565b6000808585111561219157600080fd5b8386111561219e57600080fd5b5050820193919092039150565b7fffffffffffffffffffffffffffffffffffffffff00000000000000000000000081358181169160148510156121eb5780818660140360031b1b83161692505b505092915050565b7fffffffff0000000000000000000000000000000000000000000000000000000081358181169160048510156121eb5760049490940360031b84901b1690921692915050565b7fffffffffffffffff00000000000000000000000000000000000000000000000081358181169160088510156121eb5760089490940360031b84901b1690921692915050565b8183823760009101908152919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203612316577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b5060010190565b7fffffffffffffffffffffffffffffffff0000000000000000000000000000000081358181169160108510156121eb5760109490940360031b84901b1690921692915050565b60006020828403121561237557600080fd5b505191905056fea2646970667358221220af6b83b05e2b46716f3fb00cd039f263b7a71b9d4cb41214a3a213e1cab2f5a864736f6c63430008110033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_cBridge";
            readonly type: "address";
            readonly internalType: "contract ICBridge";
        }, {
            readonly name: "_owner";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "receive";
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "cancelOwnershipTransfer";
        readonly inputs: readonly [];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "confirmOwnershipTransfer";
        readonly inputs: readonly [];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "decode_startBridgeTokensViaCBridgeERC20Packed";
        readonly inputs: readonly [{
            readonly name: "_data";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [{
            readonly name: "";
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
            readonly name: "";
            readonly type: "tuple";
            readonly internalType: "struct CBridgeFacet.CBridgeData";
            readonly components: readonly [{
                readonly name: "maxSlippage";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "nonce";
                readonly type: "uint64";
                readonly internalType: "uint64";
            }];
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "decode_startBridgeTokensViaCBridgeNativePacked";
        readonly inputs: readonly [{
            readonly name: "_data";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [{
            readonly name: "";
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
            readonly name: "";
            readonly type: "tuple";
            readonly internalType: "struct CBridgeFacet.CBridgeData";
            readonly components: readonly [{
                readonly name: "maxSlippage";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "nonce";
                readonly type: "uint64";
                readonly internalType: "uint64";
            }];
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "encode_startBridgeTokensViaCBridgeERC20Packed";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "destinationChainId";
            readonly type: "uint64";
            readonly internalType: "uint64";
        }, {
            readonly name: "sendingAssetId";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "minAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "nonce";
            readonly type: "uint64";
            readonly internalType: "uint64";
        }, {
            readonly name: "maxSlippage";
            readonly type: "uint32";
            readonly internalType: "uint32";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "encode_startBridgeTokensViaCBridgeNativePacked";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "destinationChainId";
            readonly type: "uint64";
            readonly internalType: "uint64";
        }, {
            readonly name: "nonce";
            readonly type: "uint64";
            readonly internalType: "uint64";
        }, {
            readonly name: "maxSlippage";
            readonly type: "uint32";
            readonly internalType: "uint32";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "owner";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "pendingOwner";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "setApprovalForBridge";
        readonly inputs: readonly [{
            readonly name: "tokensToApprove";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaCBridgeERC20Min";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "destinationChainId";
            readonly type: "uint64";
            readonly internalType: "uint64";
        }, {
            readonly name: "sendingAssetId";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "nonce";
            readonly type: "uint64";
            readonly internalType: "uint64";
        }, {
            readonly name: "maxSlippage";
            readonly type: "uint32";
            readonly internalType: "uint32";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaCBridgeERC20Packed";
        readonly inputs: readonly [];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaCBridgeNativeMin";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "destinationChainId";
            readonly type: "uint64";
            readonly internalType: "uint64";
        }, {
            readonly name: "nonce";
            readonly type: "uint64";
            readonly internalType: "uint64";
        }, {
            readonly name: "maxSlippage";
            readonly type: "uint32";
            readonly internalType: "uint32";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaCBridgeNativePacked";
        readonly inputs: readonly [];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "transferOwnership";
        readonly inputs: readonly [{
            readonly name: "_newOwner";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "triggerRefund";
        readonly inputs: readonly [{
            readonly name: "_callTo";
            readonly type: "address";
            readonly internalType: "address payable";
        }, {
            readonly name: "_callData";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }, {
            readonly name: "_assetAddress";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_to";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_amount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "event";
        readonly name: "CBridgeRefund";
        readonly inputs: readonly [{
            readonly name: "_assetAddress";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "_to";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "LiFiCBridgeTransfer";
        readonly inputs: readonly [{
            readonly name: "_transactionId";
            readonly type: "bytes8";
            readonly indexed: false;
            readonly internalType: "bytes8";
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
        readonly type: "event";
        readonly name: "OwnershipTransferRequested";
        readonly inputs: readonly [{
            readonly name: "_from";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "_to";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "OwnershipTransferred";
        readonly inputs: readonly [{
            readonly name: "previousOwner";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "newOwner";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "error";
        readonly name: "ContractCallNotAllowed";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "ExternalCallFailed";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidReceiver";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NewOwnerMustNotBeSelf";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NoNullOwner";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NoPendingOwnershipTransfer";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NotPendingOwner";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NullAddrIsNotAValidSpender";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "UnAuthorized";
        readonly inputs: readonly [];
    }];
    static createInterface(): CBridgeFacetPackedInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): CBridgeFacetPacked;
}
export {};
