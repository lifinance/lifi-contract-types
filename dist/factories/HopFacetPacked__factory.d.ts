import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { HopFacetPacked, HopFacetPackedInterface } from "../HopFacetPacked";
declare type HopFacetPackedConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class HopFacetPacked__factory extends ContractFactory {
    constructor(...args: HopFacetPackedConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<HopFacetPacked>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): HopFacetPacked;
    connect(signer: Signer): HopFacetPacked__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b50611fa5806100206000396000f3fe60806040526004361061007b5760003560e01c806379ded16f1161004e57806379ded16f14610100578063a634768614610113578063c5ae0fe614610133578063d713306d1461014857600080fd5b8063161be5421461008057806318f4637d1461008a578063229a9e31146100aa578063298e5108146100e0575b600080fd5b61008861015b565b005b34801561009657600080fd5b506100886100a5366004611903565b61031b565b3480156100b657600080fd5b506100ca6100c536600461199f565b61036e565b6040516100d79190611a93565b60405180910390f35b3480156100ec57600080fd5b506100ca6100fb366004611aad565b610711565b61008861010e36600461199f565b610b65565b34801561011f57600080fd5b5061008861012e366004611aad565b610bad565b34801561013f57600080fd5b50610088610c04565b610088610156366004611b8e565b610df3565b60783610156101f1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f63616c6c44617461206c656e67746820736d616c6c6572207468616e2072657160448201527f756972656400000000000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b610319610203600c6004366000611c9a565b61020c91611cc4565b7fffffffffffffffff0000000000000000000000000000000000000000000000001661023d601c600c366000611c9a565b8080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920182905250610281935060309250601c91503690611c9a565b61028a91611d0c565b60601c61029c60346030366000611c9a565b6102a591611d52565b60e01c6102b760446034366000611c9a565b6102c091611d98565b60801c6102d260546044366000611c9a565b6102db91611d98565b60801c6102ed60646054366000611c9a565b6102f691611d98565b60801c61030860786064366000611c9a565b61031191611d0c565b60601c610e09565b565b6103638989898080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152508b92508a9150899050888888610fbd565b505050505050505050565b606063ffffffff861115610404576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603860248201527f64657374696e6174696f6e436861696e49642076616c7565207061737365642060448201527f746f6f2062696720746f2066697420696e2075696e743332000000000000000060648201526084016101e8565b6fffffffffffffffffffffffffffffffff8511156104a4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603060248201527f626f6e6465724665652076616c75652070617373656420746f6f20626967207460448201527f6f2066697420696e2075696e743132380000000000000000000000000000000060648201526084016101e8565b6fffffffffffffffffffffffffffffffff841115610544576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603360248201527f616d6f756e744f75744d696e2076616c75652070617373656420746f6f20626960448201527f6720746f2066697420696e2075696e743132380000000000000000000000000060648201526084016101e8565b6fffffffffffffffffffffffffffffffff8311156105e4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603e60248201527f64657374696e6174696f6e416d6f756e744f75744d696e2076616c756520706160448201527f7373656420746f6f2062696720746f2066697420696e2075696e74313238000060648201526084016101e8565b7f161be542000000000000000000000000000000000000000000000000000000008a6106108a8c611d98565b604080517fffffffff0000000000000000000000000000000000000000000000000000000094851660208201527fffffffffffffffff0000000000000000000000000000000000000000000000009390931660248401527fffffffffffffffffffffffffffffffff00000000000000000000000000000000918216602c8401527fffffffffffffffffffffffffffffffffffffffff00000000000000000000000060609b8c1b8116603c85015260e09a909a1b9093166050830152608097881b8116605483015295871b861660648201529390951b909316607483015290941b90921660848401528051607881850301815260989093019052509392505050565b606063ffffffff8811156107a7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603860248201527f64657374696e6174696f6e436861696e49642076616c7565207061737365642060448201527f746f6f2062696720746f2066697420696e2075696e743332000000000000000060648201526084016101e8565b6fffffffffffffffffffffffffffffffff861115610847576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602d60248201527f616d6f756e742076616c75652070617373656420746f6f2062696720746f206660448201527f697420696e2075696e743132380000000000000000000000000000000000000060648201526084016101e8565b6fffffffffffffffffffffffffffffffff8511156108e7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603060248201527f626f6e6465724665652076616c75652070617373656420746f6f20626967207460448201527f6f2066697420696e2075696e743132380000000000000000000000000000000060648201526084016101e8565b6fffffffffffffffffffffffffffffffff841115610987576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603360248201527f616d6f756e744f75744d696e2076616c75652070617373656420746f6f20626960448201527f6720746f2066697420696e2075696e743132380000000000000000000000000060648201526084016101e8565b6fffffffffffffffffffffffffffffffff831115610a27576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603e60248201527f64657374696e6174696f6e416d6f756e744f75744d696e2076616c756520706160448201527f7373656420746f6f2062696720746f2066697420696e2075696e74313238000060648201526084016101e8565b7fc5ae0fe6000000000000000000000000000000000000000000000000000000008c610a538c8e611d98565b604080517fffffffff0000000000000000000000000000000000000000000000000000000094851660208201527fffffffffffffffff0000000000000000000000000000000000000000000000009390931660248401527fffffffffffffffffffffffffffffffff00000000000000000000000000000000918216602c8401527fffffffffffffffffffffffffffffffffffffffff00000000000000000000000060609d8e1b8116603c85015260e09c909c1b9093166050830152988b1b8a166054820152608097881b8916606882015295871b8816607887015293861b8716608886015250931b9093166098820152931b90911660a88301528051609c81840301815260bc90920190529392505050565b6103638989898080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152508b92508a9150899050888888610e09565b610bf78b8b8b8080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152508d92508c91508b90508a8a8a8a8a61116f565b5050505050505050505050565b609c361015610c95576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f63616c6c44617461206c656e67746820736d616c6c6572207468616e2072657160448201527f756972656400000000000000000000000000000000000000000000000000000060648201526084016101e8565b610319610ca7600c6004366000611c9a565b610cb091611cc4565b7fffffffffffffffff00000000000000000000000000000000000000000000000016610ce1601c600c366000611c9a565b8080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920182905250610d25935060309250601c91503690611c9a565b610d2e91611d0c565b60601c610d4060346030366000611c9a565b610d4991611d52565b60e01c610d5b60486034366000611c9a565b610d6491611d0c565b60601c610d7660586048366000611c9a565b610d7f91611d98565b60801c610d9160686058366000611c9a565b610d9a91611d98565b60801c610dac60786068366000611c9a565b610db591611d98565b60801c610dc760886078366000611c9a565b610dd091611d98565b60801c610de2609c6088366000611c9a565b610deb91611d0c565b60601c61116f565b610e01868686868686611331565b505050505050565b60008560011480610e1a5750856005145b610e2f57610e2a426104b0611dde565b610e32565b60005b6040517feea0d7b20000000000000000000000000000000000000000000000000000000081526004810188905273ffffffffffffffffffffffffffffffffffffffff8981166024830152346044830181905260648301899052608483018890524260a484015260c4830187905260e4830184905292935084169163eea0d7b291610104016000604051808303818588803b158015610ecf57600080fd5b505af1158015610ee3573d6000803e3d6000fd5b505060408051610140810182528d815281518083018352600381527f686f7000000000000000000000000000000000000000000000000000000000006020828101919091528201528082018d90526000606082018190526080820181905273ffffffffffffffffffffffffffffffffffffffff8d1660a08301523460c083015260e082018c9052610100820181905261012082015290517fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f19450610faa9350909150611e1e565b60405180910390a1505050505050505050565b610fc9843330866114d6565b73ffffffffffffffffffffffffffffffffffffffff811663deace8f586888686610ff5426104b0611dde565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e088901b168152600481019590955273ffffffffffffffffffffffffffffffffffffffff9093166024850152604484019190915260648301526084820152600060a4820181905260c482015260e401600060405180830381600087803b15801561108357600080fd5b505af1158015611097573d6000803e3d6000fd5b505060408051610140810182528b815281518083018352600381527f686f7000000000000000000000000000000000000000000000000000000000006020828101919091528201528082018b905260006060820181905273ffffffffffffffffffffffffffffffffffffffff89811660808401528b1660a083015260c0820188905260e082018a9052610100820181905261012082015290517fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f1935061115d9250611e1e565b60405180910390a15050505050505050565b61117b863330886114d6565b6000876001148061118c5750876005145b6111a15761119c426104b0611dde565b6111a4565b60005b6040517feea0d7b2000000000000000000000000000000000000000000000000000000008152600481018a905273ffffffffffffffffffffffffffffffffffffffff8b811660248301526044820189905260648201889052608482018790524260a483015260c4820186905260e482018390529192509083169063eea0d7b29061010401600060405180830381600087803b15801561124257600080fd5b505af1158015611256573d6000803e3d6000fd5b505060408051610140810182528e815281518083018352600381527f686f7000000000000000000000000000000000000000000000000000000000006020828101919091528201528082018e905260006060820181905273ffffffffffffffffffffffffffffffffffffffff8c811660808401528e1660a083015260c082018b905260e082018d9052610100820181905261012082015290517fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f1935061131c9250611e1e565b60405180910390a15050505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff811663deace8f5348587828761135e426104b0611dde565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e089901b168152600481019590955273ffffffffffffffffffffffffffffffffffffffff9093166024850152604484019190915260648301526084820152600060a4820181905260c482015260e4016000604051808303818588803b1580156113eb57600080fd5b505af11580156113ff573d6000803e3d6000fd5b505060408051610140810182528a815281518083018352600381527f686f7000000000000000000000000000000000000000000000000000000000006020828101919091528201528082018a90526000606082018190526080820181905273ffffffffffffffffffffffffffffffffffffffff8a1660a08301523460c083015260e08201899052610100820181905261012082015290517fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f194506114c69350909150611e1e565b60405180910390a1505050505050565b6040805173ffffffffffffffffffffffffffffffffffffffff85811660248301528416604482015260648082018490528251808303909101815260849091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f23b872dd0000000000000000000000000000000000000000000000000000000017905261156b908590611571565b50505050565b60006115d3826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff166116829092919063ffffffff16565b80519091501561167d57808060200190518101906115f19190611f31565b61167d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f7420737563636565640000000000000000000000000000000000000000000060648201526084016101e8565b505050565b60606116918484600085611699565b949350505050565b60608247101561172b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c000000000000000000000000000000000000000000000000000060648201526084016101e8565b6000808673ffffffffffffffffffffffffffffffffffffffff1685876040516117549190611f53565b60006040518083038185875af1925050503d8060008114611791576040519150601f19603f3d011682016040523d82523d6000602084013e611796565b606091505b50915091506117a7878383876117b2565b979650505050505050565b606083156118485782516000036118415773ffffffffffffffffffffffffffffffffffffffff85163b611841576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016101e8565b5081611691565b611691838381511561185d5781518083602001fd5b806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101e89190611a93565b60008083601f8401126118a357600080fd5b50813567ffffffffffffffff8111156118bb57600080fd5b6020830191508360208285010111156118d357600080fd5b9250929050565b803573ffffffffffffffffffffffffffffffffffffffff811681146118fe57600080fd5b919050565b60008060008060008060008060006101008a8c03121561192257600080fd5b8935985060208a013567ffffffffffffffff81111561194057600080fd5b61194c8c828d01611891565b909950975061195f905060408b016118da565b955060608a0135945061197460808b016118da565b935060a08a0135925060c08a0135915061199060e08b016118da565b90509295985092959850929598565b60008060008060008060008060006101008a8c0312156119be57600080fd5b8935985060208a013567ffffffffffffffff8111156119dc57600080fd5b6119e88c828d01611891565b90995097506119fb905060408b016118da565b955060608a0135945060808a0135935060a08a0135925060c08a0135915061199060e08b016118da565b60005b83811015611a40578181015183820152602001611a28565b50506000910152565b60008151808452611a61816020860160208601611a25565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b602081526000611aa66020830184611a49565b9392505050565b60008060008060008060008060008060006101408c8e031215611acf57600080fd5b8b359a5060208c013567ffffffffffffffff811115611aed57600080fd5b611af98e828f01611891565b909b509950611b0c905060408d016118da565b975060608c01359650611b2160808d016118da565b955060a08c0135945060c08c0135935060e08c013592506101008c01359150611b4d6101208d016118da565b90509295989b509295989b9093969950565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60008060008060008060c08789031215611ba757600080fd5b86359550602087013567ffffffffffffffff80821115611bc657600080fd5b818901915089601f830112611bda57600080fd5b813581811115611bec57611bec611b5f565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f01168101908382118183101715611c3257611c32611b5f565b816040528281528c6020848701011115611c4b57600080fd5b826020860160208301376000602084830101528099505050505050611c72604088016118da565b93506060870135925060808701359150611c8e60a088016118da565b90509295509295509295565b60008085851115611caa57600080fd5b83861115611cb757600080fd5b5050820193919092039150565b7fffffffffffffffff0000000000000000000000000000000000000000000000008135818116916008851015611d045780818660080360031b1b83161692505b505092915050565b7fffffffffffffffffffffffffffffffffffffffff0000000000000000000000008135818116916014851015611d045760149490940360031b84901b1690921692915050565b7fffffffff000000000000000000000000000000000000000000000000000000008135818116916004851015611d045760049490940360031b84901b1690921692915050565b7fffffffffffffffffffffffffffffffff000000000000000000000000000000008135818116916010851015611d045760109490940360031b84901b1690921692915050565b80820180821115611e18577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b92915050565b602081528151602082015260006020830151610140806040850152611e47610160850183611a49565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0858403016060860152611e828382611a49565b9250506060850151611eac608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e0850151610100818187015280870151915050610120611f1f8187018315159052565b90950151151593019290925250919050565b600060208284031215611f4357600080fd5b81518015158114611aa657600080fd5b60008251611f65818460208701611a25565b919091019291505056fea26469706673582212201a269eb30d756b0b1e13fd66da0f9f2975682edb78078066df420173ea57e05a64736f6c63430008110033";
    static readonly abi: readonly [{
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "transactionId";
            readonly type: "bytes32";
        }, {
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "integrator";
            readonly type: "string";
        }, {
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "referrer";
            readonly type: "string";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "receiver";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "fromAssetId";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "toAssetId";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "fromAmount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "toAmount";
            readonly type: "uint256";
        }];
        readonly name: "LiFiGenericSwapCompleted";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "transactionId";
            readonly type: "bytes32";
        }, {
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "integrator";
            readonly type: "string";
        }, {
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "referrer";
            readonly type: "string";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "fromAssetId";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "toAssetId";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "fromAmount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "toAmount";
            readonly type: "uint256";
        }];
        readonly name: "LiFiSwappedGeneric";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "transactionId";
            readonly type: "bytes32";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "receivingAssetId";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "receiver";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "timestamp";
            readonly type: "uint256";
        }];
        readonly name: "LiFiTransferCompleted";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "transactionId";
            readonly type: "bytes32";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "receivingAssetId";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "receiver";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "timestamp";
            readonly type: "uint256";
        }];
        readonly name: "LiFiTransferRecovered";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "bytes32";
                readonly name: "transactionId";
                readonly type: "bytes32";
            }, {
                readonly internalType: "string";
                readonly name: "bridge";
                readonly type: "string";
            }, {
                readonly internalType: "string";
                readonly name: "integrator";
                readonly type: "string";
            }, {
                readonly internalType: "address";
                readonly name: "referrer";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "sendingAssetId";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "receiver";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "minAmount";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "destinationChainId";
                readonly type: "uint256";
            }, {
                readonly internalType: "bool";
                readonly name: "hasSourceSwaps";
                readonly type: "bool";
            }, {
                readonly internalType: "bool";
                readonly name: "hasDestinationCall";
                readonly type: "bool";
            }];
            readonly indexed: false;
            readonly internalType: "struct ILiFi.BridgeData";
            readonly name: "bridgeData";
            readonly type: "tuple";
        }];
        readonly name: "LiFiTransferStarted";
        readonly type: "event";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "transactionId";
            readonly type: "bytes32";
        }, {
            readonly internalType: "string";
            readonly name: "integrator";
            readonly type: "string";
        }, {
            readonly internalType: "address";
            readonly name: "receiver";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "destinationChainId";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "sendingAssetId";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "bonderFee";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "amountOutMin";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "destinationAmountOutMin";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "hopBridge";
            readonly type: "address";
        }];
        readonly name: "encoder_startBridgeTokensViaHopL2ERC20Packed";
        readonly outputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "";
            readonly type: "bytes";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "transactionId";
            readonly type: "bytes32";
        }, {
            readonly internalType: "string";
            readonly name: "integrator";
            readonly type: "string";
        }, {
            readonly internalType: "address";
            readonly name: "receiver";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "destinationChainId";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "bonderFee";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "amountOutMin";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "destinationAmountOutMin";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "hopBridge";
            readonly type: "address";
        }];
        readonly name: "encoder_startBridgeTokensViaHopL2NativePacked";
        readonly outputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "";
            readonly type: "bytes";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "transactionId";
            readonly type: "bytes32";
        }, {
            readonly internalType: "string";
            readonly name: "integrator";
            readonly type: "string";
        }, {
            readonly internalType: "address";
            readonly name: "receiver";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "destinationChainId";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "sendingAssetId";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "destinationAmountOutMin";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "hopBridge";
            readonly type: "address";
        }];
        readonly name: "startBridgeTokensViaHopL1ERC20Min";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "transactionId";
            readonly type: "bytes32";
        }, {
            readonly internalType: "string";
            readonly name: "integrator";
            readonly type: "string";
        }, {
            readonly internalType: "address";
            readonly name: "receiver";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "destinationChainId";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "destinationAmountOutMin";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "hopBridge";
            readonly type: "address";
        }];
        readonly name: "startBridgeTokensViaHopL1NativeMin";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "transactionId";
            readonly type: "bytes32";
        }, {
            readonly internalType: "string";
            readonly name: "integrator";
            readonly type: "string";
        }, {
            readonly internalType: "address";
            readonly name: "receiver";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "destinationChainId";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "sendingAssetId";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "bonderFee";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "amountOutMin";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "destinationAmountOutMin";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "hopBridge";
            readonly type: "address";
        }];
        readonly name: "startBridgeTokensViaHopL2ERC20Min";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "startBridgeTokensViaHopL2ERC20Packed";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "transactionId";
            readonly type: "bytes32";
        }, {
            readonly internalType: "string";
            readonly name: "integrator";
            readonly type: "string";
        }, {
            readonly internalType: "address";
            readonly name: "receiver";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "destinationChainId";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "bonderFee";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "amountOutMin";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "destinationAmountOutMin";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "hopBridge";
            readonly type: "address";
        }];
        readonly name: "startBridgeTokensViaHopL2NativeMin";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "startBridgeTokensViaHopL2NativePacked";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }];
    static createInterface(): HopFacetPackedInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): HopFacetPacked;
}
export {};
